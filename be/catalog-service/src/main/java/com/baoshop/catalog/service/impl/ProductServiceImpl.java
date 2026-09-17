package com.baoshop.catalog.service.impl;

import com.baoshop.catalog.dto.request.CreateProductRequest;
import com.baoshop.catalog.dto.response.ProductResponse;
import com.baoshop.catalog.entity.Product;
import com.baoshop.catalog.entity.ProductImage;
import com.baoshop.catalog.repository.ProductImageRepository;
import com.baoshop.catalog.repository.ProductRepository;
import com.baoshop.catalog.service.ProductService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;

    public ProductServiceImpl(
            ProductRepository productRepository,
            ProductImageRepository productImageRepository) {
        this.productRepository = productRepository;
        this.productImageRepository = productImageRepository;
    }

    @Override
    @Transactional
    public ProductResponse create(CreateProductRequest request) {
        if (productRepository.existsBySku(request.sku())) {
            throw new RuntimeException("SKU already exists: " + request.sku());
        }

        // 1. Insert product
        Product product = new Product();
        product.setSku(request.sku());
        product.setName(request.name());
        product.setSlug(slugify(request.name()));
        product.setBasePrice(request.basePrice());
        product.setStatus("published");
        product.setPrimaryImageUrl(request.imageUrl());   // ← Lưu ảnh chính

        Product saved = productRepository.save(product);

        // 2. Insert product image (nếu có)
        if (request.imageUrl() != null && !request.imageUrl().isBlank()) {
            ProductImage image = new ProductImage();
            image.setProductId(saved.getId());
            image.setUrl(request.imageUrl());
            image.setSortOrder(0);
            image.setIsPrimary(true);
            productImageRepository.save(image);
        }

        return new ProductResponse(
            saved.getId(),
            saved.getSku(),
            saved.getName(),
            saved.getSlug(),
            saved.getBasePrice(),
            saved.getPrimaryImageUrl()
        );
    }

    private String slugify(String input) {
        return input.toLowerCase()
            .replaceAll("[^a-z0-9\\s-]", "")
            .replaceAll("\\s+", "-")
            .replaceAll("-+", "-")
            .replaceAll("^-|-$", "");
    }
}