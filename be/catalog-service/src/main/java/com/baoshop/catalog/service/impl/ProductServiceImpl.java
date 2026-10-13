package com.baoshop.catalog.service.impl;

import com.baoshop.catalog.dto.request.CreateProductRequest;
import com.baoshop.catalog.dto.response.ProductResponse;
import com.baoshop.catalog.entity.Category;
import com.baoshop.catalog.entity.Product;
import com.baoshop.catalog.entity.ProductImage;
import com.baoshop.catalog.repository.CategoryRepository;
import com.baoshop.catalog.repository.ProductImageRepository;
import com.baoshop.catalog.repository.ProductRepository;
import com.baoshop.catalog.service.ProductService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;
    private final CategoryRepository categoryRepository;

    public ProductServiceImpl(
            ProductRepository productRepository,
            ProductImageRepository productImageRepository,
            CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.productImageRepository = productImageRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    @Transactional
    public ProductResponse create(CreateProductRequest request) {
        // 1. Check SKU
        if (productRepository.existsBySku(request.sku())) {
            throw new RuntimeException("SKU already exists: " + request.sku());
        }

        // 2. Tìm category (nếu có)
        UUID categoryId = null;
        if (request.categorySlug() != null && !request.categorySlug().isBlank()) {
            categoryId = categoryRepository.findBySlug(request.categorySlug())
                    .map(Category::getId)
                    .orElse(null);
        }

        // 3. Tạo Product
        Product product = new Product();
        product.setSku(request.sku());
        product.setName(request.name());
        product.setSlug(slugify(request.name()));
        product.setBasePrice(request.basePrice());
        product.setOriginalPrice(request.originalPrice());
        product.setCurrency(request.currency() != null ? request.currency() : "USD");
        product.setBrand(request.brand());
        product.setDescription(request.description());
        product.setRating(request.rating());
        product.setReviewCount(request.reviewCount());
        product.setExternalId(request.externalId());
        product.setSellerName(request.sellerName());
        product.setSellerId(request.sellerId());
        product.setCategoryId(categoryId);
        product.setStatus(request.status() != null ? request.status() : "published");
        product.setSpecs(request.specs() != null ? request.specs() : Map.of());

        // Primary image: ưu tiên imageUrl, fallback images[0]
        String primaryImage = request.imageUrl();
        if (primaryImage == null && request.images() != null && !request.images().isEmpty()) {
            primaryImage = request.images().get(0).url();
        }
        product.setPrimaryImageUrl(primaryImage);

        Product saved = productRepository.save(product);

        // 4. Insert images
        if (request.images() != null && !request.images().isEmpty()) {
            for (int i = 0; i < request.images().size(); i++) {
                CreateProductRequest.ImageRequest img = request.images().get(i);
                ProductImage image = new ProductImage();
                image.setProductId(saved.getId());
                image.setUrl(img.url());
                image.setSortOrder(i);
                image.setIsPrimary(img.isPrimary() != null ? img.isPrimary() : (i == 0));
                productImageRepository.save(image);
            }
        }

        // 5. Trả về response
        List<String> imageUrls = productImageRepository
                .findByProductIdOrderBySortOrderAsc(saved.getId())
                .stream()
                .map(ProductImage::getUrl)
                .collect(Collectors.toList());

        String categorySlug = categoryId != null
                ? categoryRepository.findById(categoryId).map(Category::getSlug).orElse(null)
                : null;

        return new ProductResponse(
                saved.getId(),
                saved.getSku(),
                saved.getName(),
                saved.getSlug(),
                saved.getBrand(),
                saved.getDescription(),
                saved.getBasePrice(),
                saved.getOriginalPrice(),
                saved.getCurrency(),
                saved.getRating(),
                saved.getReviewCount(),
                saved.getExternalId(),
                saved.getSellerName(),
                saved.getStatus(),
                categorySlug,
                saved.getPrimaryImageUrl(),
                imageUrls,
                saved.getSpecs()
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