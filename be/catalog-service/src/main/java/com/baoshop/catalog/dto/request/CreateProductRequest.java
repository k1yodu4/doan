package com.baoshop.catalog.dto.request;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

public record CreateProductRequest(
    @NotBlank(message = "Name is required")
    String name,

    @NotNull(message = "Price is required")
    @Positive(message = "Price must be positive")
    BigDecimal basePrice,

    @NotBlank(message = "SKU is required")
    String sku,

    // === Mới thêm ===
    String externalId,
    String categorySlug,
    String brand,
    String description,
    BigDecimal originalPrice,
    String currency,
    BigDecimal rating,
    Integer reviewCount,
    String sellerName,
    String sellerId,
    String status,
    Map<String, Object> specs,
    List<ImageRequest> images,
    String imageUrl    // Giữ để backward compatible
) {
    public record ImageRequest(String url, Boolean isPrimary) {}
}