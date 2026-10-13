// src/index.js
require('dotenv').config();

const { scrapeCategory } = require('./scrapers/walmartScraper');
const { createProduct, healthCheck } = require('./clients/catalogClient');

/**
 * Parse CLI arguments
 */
function parseArgs() {
    const args = process.argv.slice(2);
    const category = args.find(a => a.startsWith('--category='))?.split('=')[1] || 'cpu';
    const pages = parseInt(args.find(a => a.startsWith('--pages='))?.split('=')[1] || '1', 10);
    const skipDb = args.includes('--skip-db');
    return { category, pages, skipDb };
}

async function main() {
    const { category, pages, skipDb } = parseArgs();

    console.log('🚀 BAO SHOP SCRAPER');
    console.log('='.repeat(50));

    // ============================================
    // 0. Kiểm tra catalog-service
    // ============================================
    if (!skipDb) {
        const isHealthy = await healthCheck();
        if (!isHealthy) {
            console.error('❌ catalog-service không chạy ở http://localhost:8082');
            console.error('   Chạy: cd be/catalog-service && .\\mvnw spring-boot:run');
            process.exit(1);
        }
        console.log('✅ catalog-service OK');
    }

    // ============================================
    // 1. Scrape
    // ============================================
    const categories = category === 'all'
        ? ['cpu', 'gpu', 'motherboard', 'ram', 'ssd', 'laptop', 'monitor']
        : [category];

    const allProducts = [];

    for (const cat of categories) {
        try {
            const products = await scrapeCategory(cat, pages);
            allProducts.push(...products);
        } catch (err) {
            console.error(`❌ Category ${cat} lỗi: ${err.message}`);
        }
    }

    console.log(`\n${'='.repeat(50)}`);
    console.log(`📊 TỔNG: ${allProducts.length} sản phẩm`);
    console.log('='.repeat(50));

    // ============================================
    // 2. Insert vào DB
    // ============================================
    if (skipDb) {
        console.log('⏭️  Bỏ qua insert DB (--skip-db)');
        return;
    }

    if (allProducts.length === 0) {
        console.log('⚠️  Không có sản phẩm để insert');
        return;
    }

    console.log('\n📦 Insert vào DB...');
    let success = 0;
    let skipped = 0;
    let failed = 0;

    for (let i = 0; i < allProducts.length; i++) {
        const product = allProducts[i];
        process.stdout.write(`   [${i + 1}/${allProducts.length}] ${product.name?.slice(0, 50)}... `);

        try {
            const result = await createProduct(product);
            if (result?.skipped) {
                console.log('⏭️  (đã tồn tại)');
                skipped++;
            } else {
                console.log('✅');
                success++;
            }
        } catch (err) {
            console.log('❌');
            console.error(`      ${err.response?.data?.message || err.message}`);
            failed++;
        }
    }

    console.log(`\n${'='.repeat(50)}`);
    console.log(`✅ Thành công: ${success}`);
    console.log(`⏭️  Bỏ qua:    ${skipped}`);
    console.log(`❌ Thất bại:   ${failed}`);
    console.log('='.repeat(50));
}

main().catch(err => {
    console.error('\n💥 Lỗi không xử lý được:', err);
    process.exit(1);
});