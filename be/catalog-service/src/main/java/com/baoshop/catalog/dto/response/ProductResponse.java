package com.baoshop.catalog.dto.response;

import java.math.BigDecimal;
import java.util.UUID;

public record ProductResponse(
    UUID id,
    String sku,
    String name,
    String slug,
    BigDecimal basePrice,
    String imageUrl
) {}