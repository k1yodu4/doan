package com.baoshop.catalog.service;

import com.baoshop.catalog.dto.request.CreateProductRequest;
import com.baoshop.catalog.dto.response.ProductResponse;

public interface ProductService {
    ProductResponse create(CreateProductRequest request);
}