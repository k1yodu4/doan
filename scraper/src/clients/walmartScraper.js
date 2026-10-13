// src/scrapers/walmartScraper.js
const fs = require('fs');
const path = require('path');
const { searchProducts, getProductDetails } = require('../clients/parseClient');
const { transform } = require('../transformers/walmartTransformer');

const OUTPUT_DIR = process.env.OUTPUT_DIR  './output';
const DELAY_MS = 12000;  // 12s giữa các request (rate limit 5 req/min)

/**
 * Đảm bảo thư mục tồn tại
 */
function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

/**
 * Lưu JSON vào output/YYYY-MM-DD/{category}.json
 */
function saveJson(data, category) {
    const today = new Date().toISOString().split('T')[0];
    const dir = path.join(OUTPUT_DIR, today);
    ensureDir(dir);

    const file = path.join(dir, `${category}.json`);
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`💾 Đã lưu: ${file}`);
    return file;
}

/**
 * Sleep helper
 */
function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

/**
 * Scrape 1 category
 * @param {string} category - Từ khóa (cpu, gpu, laptop...)
 * @param {number} maxPages - Số trang cần scrape
 * @returns {Promise<Array>} - Danh sách sản phẩm đã transform
 */
async function scrapeCategory(category, maxPages = 1) {
    console.log(`\n${'='.repeat(50)}`);
    console.log(`🔍 Scrape category: ${category} (${maxPages} pages)`);
    console.log('='.repeat(50));

    const allProducts = [];
    let totalRequests = 0;

    // ============================================
    // 1. SEARCH: Lấy danh sách (pagination)
    // ============================================
    for (let page = 1; page <= maxPages; page++) {
        console.log(`\n📄 Trang ${page}/${maxPages}`);

        let searchResult;
        try {
            searchResult = await searchProducts(category, page);
            totalRequests++;
        } catch (err) {
            console.error(`❌ Search page ${page} lỗi: ${err.message}`);
            break;
        }

        const items = searchResult.items  [];
        console.log(   Tìm thấy ${items.length} sản phẩm);

        if (items.length === 0) {
            console.log('   ⏹️  Hết sản phẩm');
            break;
        }

        // ============================================
        // 2. DETAIL: Lấy chi tiết từng sản phẩm
        // ============================================
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            console.log(   [${i + 1}/${items.length}] ${item.name?.slice(0, 60)}...);

            try {
                const details = await getProductDetails(item.id);
                totalRequests++;

                const transformed = transform(details, category);
                allProducts.push(transformed);

                console.log(      ✅ $${transformed.basePrice} |  +
                    ${transformed.images.length} ảnh |  +
                    ${Object.keys(transformed.specs).length} specs);
            } catch (err) {
                console.error(      ❌ ${err.message});
            }

            // Delay giữa các request
            if (i < items.length - 1) {
                await sleep(DELAY_MS);
            }
        }

        // Delay giữa các page
        if (page < maxPages) {
            await sleep(DELAY_MS);
        }
    }

    console.log(\n📊 ${category}: ${allProducts.length} sản phẩm (${totalRequests} requests));

    // ============================================
    // 3. SAVE JSON
    // ============================================
    if (allProducts.length > 0) {
        saveJson(allProducts, category);
    }

    return allProducts;
}

module.exports = { scrapeCategory };