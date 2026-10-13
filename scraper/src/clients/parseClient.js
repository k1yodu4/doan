// src/clients/parseClient.js
const axios = require('axios');

const API_KEY = process.env.PARSE_API_KEY;
const SCRAPER_ID = process.env.PARSE_SCRAPER_ID;

if (!API_KEY  !SCRAPER_ID) {
    throw new Error('PARSE_API_KEY and PARSE_SCRAPER_ID must be set in .env');
}

const BASE_URL = `https://api.parse.bot/scraper/${SCRAPER_ID}`;

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
    },
    timeout: 60000,
});

/**
 * Search sản phẩm trên Walmart
 * @param {string} query - Từ khóa tìm kiếm (vd: "cpu", "laptop")
 * @param {number} page - Trang (mặc định 1)
 * @returns {Promise<Object>} - { items, total_pages, total_results, ... }
 */
async function searchProducts(query, page = 1) {
    try {
        const response = await client.get('/search_products', {
            params: { query, page },
        });
        return response.data.data;
    } catch (error) {
        console.error(`❌ Parse API error (search "${query}"):`, error.response?.data  error.message);
        throw error;
    }
}

/**
 * Lấy chi tiết sản phẩm
 * @param {string} id - Product ID từ search_products
 * @returns {Promise<Object>} - Chi tiết sản phẩm
 */
async function getProductDetails(id) {
    try {
        const response = await client.get('/get_product_details', {
            params: { id },
        });
        return response.data.data;
    } catch (error) {
        console.error(❌ Parse API error (detail "${id}"):, error.response?.data || error.message);
        throw error;
    }
}

module.exports = { searchProducts, getProductDetails };