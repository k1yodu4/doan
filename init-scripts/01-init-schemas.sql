-- ============================================
-- Tạo user cho từng service
-- ============================================
CREATE USER auth_user WITH PASSWORD 'gbao4132';
CREATE USER catalog_user WITH PASSWORD 'gbao4132';
CREATE USER inventory_user WITH PASSWORD 'gbao4132';
CREATE USER order_user WITH PASSWORD 'gbao4132';
CREATE USER payment_user WITH PASSWORD 'gbao4132';

-- ============================================
-- Tạo schema
-- ============================================
CREATE SCHEMA auth;
CREATE SCHEMA catalog;
CREATE SCHEMA inventory;
CREATE SCHEMA "order";
CREATE SCHEMA payment;

-- ============================================
-- Cấp quyền
-- ============================================
GRANT ALL ON SCHEMA auth TO auth_user;
GRANT ALL ON SCHEMA catalog TO catalog_user;
GRANT ALL ON SCHEMA inventory TO inventory_user;
GRANT ALL ON SCHEMA "order" TO order_user;
GRANT ALL ON SCHEMA payment TO payment_user;

ALTER DEFAULT PRIVILEGES IN SCHEMA auth GRANT ALL ON TABLES TO auth_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA catalog GRANT ALL ON TABLES TO catalog_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA inventory GRANT ALL ON TABLES TO inventory_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA "order" GRANT ALL ON TABLES TO order_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA payment GRANT ALL ON TABLES TO payment_user;

ALTER DEFAULT PRIVILEGES IN SCHEMA auth GRANT ALL ON SEQUENCES TO auth_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA catalog GRANT ALL ON SEQUENCES TO catalog_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA inventory GRANT ALL ON SEQUENCES TO inventory_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA "order" GRANT ALL ON SEQUENCES TO order_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA payment GRANT ALL ON SEQUENCES TO payment_user;