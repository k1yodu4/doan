// src/clients/catalogClient.js
const axios = require('axios');

const CATALOG_API = process.env.CATALOG_API || 'http://localhost:8082/api/v1/products';

const client = axios.create({
    baseURL: CATALOG_API,
    headers: { 'Content-Type': 'application/json' },
    timeout: 30000,
});

/
 * Gửi sản phẩm lên catalog-service
 * @param {Object} product - Sản phẩm đã transform
 * @returns {Promise<Object>} - ProductResponse từ catalog-service
 */
async function createProduct(product) {
    try {
        const response = await client.post('', product);
        return response.data;
    } catch (error) {
        // Nếu SKU đã tồn tại → bỏ qua, không throw
        if (error.response?.status === 500 &&
            error.response?.data?.message?.includes('SKU already exists')) {
            return { skipped: true, reason: 'SKU already exists' };
        }
        throw error;
    }
}

/
 * Kiểm tra catalog-service có chạy không
 */
async function healthCheck() {
    try {
        await client.get('');
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = { createProduct, healthCheck };