ALTER TABLE catalog.products
ADD COLUMN IF NOT EXISTS primary_image_url TEXT;

-- Thêm cột is_primary nếu chưa có
ALTER TABLE catalog.product_images
ADD COLUMN IF NOT EXISTS is_primary BOOLEAN NOT NULL DEFAULT FALSE;

ALTER TABLE catalog.product_images
ADD COLUMN IF NOT EXISTS created_at TIMESTAMP NOT NULL DEFAULT NOW();