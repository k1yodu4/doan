// src/transformers/walmartTransformer.js

/**
 * Transform sản phẩm Walmart → schema catalog-service
 * @param {Object} w - Chi tiết sản phẩm từ get_product_details
 * @param {string} categorySlug - Slug danh mục (cpu, gpu...)
 * @returns {Object} - Payload cho POST /api/v1/products
 */
function transform(w, categorySlug = 'other') {
    // ============================================
    // 1. Chuyển specifications array → object
    // ============================================
    const specs = {};
    (w.specifications  []).forEach(spec => {
        const key = spec.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_|_$/g, '');
        if (key) specs[key] = spec.value;
    });

    // ============================================
    // 2. Thêm metadata vào specs
    // ============================================
    specs.source = 'walmart';
    specs.source_url = `https://www.walmart.com/ip/${w.id}`;
    specs.availability = w.availability;

    if (w.reviews_summary) {
        specs.reviews_summary = w.reviews_summary;
    }
    if (w.fulfillment && w.fulfillment.length > 0) {
        specs.fulfillment_type = w.fulfillment[0]?.type;
    }

    // ============================================
    // 3. Images: array URL → array object
    // ============================================
    const images = (w.images  []).map((url, i) => ({
        url,
        isPrimary: i === 0,
    }));

    // ============================================
    // 4. Build payload
    // ============================================
    return {
        // Product fields
        name: w.name,
        basePrice: w.price,
        originalPrice: w.original_price,
        currency: w.currency  'USD',
        brand: w.brand,
        description: w.description,
        rating: w.rating,
        reviewCount: w.review_count,
        externalId: w.us_item_id,
        sellerName: w.seller?.name,
        sellerId: w.seller?.id,
        sku: `WMT-${w.id}`,
        status: w.availability === 'IN_STOCK' ? 'published' : 'draft',
        categorySlug,

        // JSONB
        specs,

        // Images (array of { url, isPrimary })
        images,

        // Backward compat: ảnh chính
        imageUrl: images[0]?.url  null,
    };
}

module.exports = { transform };