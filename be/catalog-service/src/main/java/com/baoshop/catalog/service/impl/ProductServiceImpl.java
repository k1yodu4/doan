package com.baoshop.catalog.service.impl;

import com.baoshop.catalog.dto.request.CreateProductRequest;
import com.baoshop.catalog.dto.response.ProductResponse;
import com.baoshop.catalog.entity.Product;
import com.baoshop.catalog.repository.ProductRepository;
import com.baoshop.catalog.service.ProductService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    @Transactional
    public ProductResponse create(CreateProductRequest request) {
        if (productRepository.existsBySku(request.sku())) {
            throw new RuntimeException("SKU already exists: " + request.sku());
        }

        Product product = new Product();
        product.setSku(request.sku());
        product.setName(request.name());
        product.setSlug(slugify(request.name()));
        product.setBasePrice(request.basePrice());
        product.setStatus("published");

        Product saved = productRepository.save(product);

        return new ProductResponse(
            saved.getId(),
            saved.getSku(),
            saved.getName(),
            saved.getSlug(),
            saved.getBasePrice(),
            request.imageUrl()
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