-- Thêm các cột từ API Walmart
ALTER TABLE catalog.products
ADD COLUMN IF NOT EXISTS brand VARCHAR(100),
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS currency VARCHAR(3) DEFAULT 'USD',
ADD COLUMN IF NOT EXISTS rating DECIMAL(3,2),
ADD COLUMN IF NOT EXISTS review_count INT,
ADD COLUMN IF NOT EXISTS original_price DECIMAL(12,2),
ADD COLUMN IF NOT EXISTS external_id VARCHAR(100),
ADD COLUMN IF NOT EXISTS seller_name VARCHAR(255),
ADD COLUMN IF NOT EXISTS seller_id VARCHAR(100),
ADD COLUMN IF NOT EXISTS category_id UUID,
ADD COLUMN IF NOT EXISTS specs JSONB NOT NULL DEFAULT '{}'::jsonb;

-- Index cho query nhanh
CREATE INDEX IF NOT EXISTS idx_products_external_id ON catalog.products(external_id);
CREATE INDEX IF NOT EXISTS idx_products_category_id ON catalog.products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_brand ON catalog.products(brand);
CREATE INDEX IF NOT EXISTS idx_products_rating ON catalog.products(rating);
CREATE INDEX IF NOT EXISTS idx_products_specs_gin ON catalog.products USING GIN (specs);