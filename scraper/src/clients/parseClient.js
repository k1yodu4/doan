// src/clients/parseClient.js
const axios = require('axios');

const API_KEY = process.env.PARSE_API_KEY;
const SCRAPER_ID = process.env.PARSE_SCRAPER_ID;

if (!API_KEY || !SCRAPER_ID) {
    throw new Error('PARSE_API_KEY and PARSE_SCRAPER_ID must be set in .env');
}

const BASE_URL = `https://api.parse.bot/scraper/${SCRAPER_ID}`;

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-API-Key': API_KEY,
        'Content-Type': 'application/json',
    },
    timeout: 180000,  // ← Tăng lên 120s
});

/**
 * Search sản phẩm
 */
async function searchProducts(query, page = 1) {
    try {
        const response = await client.get('/search_products', {
            params: { query, page },
        });
        return response.data.data;
    } catch (error) {
        console.error(`❌ Parse API error (search "${query}"):`, error.response?.data || error.message);
        throw error;
    }
}

/**
 * Lấy chi tiết sản phẩm
 * @param {string} productId - Product ID (dạng "1AM34BSRE0QC")
 */
async function getProductDetails(productId) {
    try {
        const response = await client.get('/get_product_details', {
            params: { product_id: productId },  // ← ĐÚNG: product_id
        });
        return response.data.data;
    } catch (error) {
        console.error(`❌ Parse API error (detail "${productId}"):`, error.response?.data || error.message);
        throw error;
    }
}

module.exports = { searchProducts, getProductDetails };