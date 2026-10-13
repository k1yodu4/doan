package com.baoshop.catalog.dto.response;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public record ProductResponse(
    UUID id,
    String sku,
    String name,
    String slug,
    String brand,
    String description,
    BigDecimal basePrice,
    BigDecimal originalPrice,
    String currency,
    BigDecimal rating,
    Integer reviewCount,
    String externalId,
    String sellerName,
    String status,
    String categorySlug,
    String primaryImageUrl,
    List<String> images,
    Map<String, Object> specs
) {}