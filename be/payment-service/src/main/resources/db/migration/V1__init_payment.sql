CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL UNIQUE,
  provider VARCHAR(20) NOT NULL,
  provider_txn_id VARCHAR(255),
  amount DECIMAL(12,2) NOT NULL,
  method VARCHAR(50),
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_payments_order_id ON payments(order_id);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_provider_txn ON payments(provider_txn_id);

CREATE TABLE payment_events_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  payment_id UUID NOT NULL REFERENCES payments(id) ON DELETE CASCADE,
  raw_payload JSONB NOT NULL,
  received_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_payment_events_payment_id ON payment_events_log(payment_id);