-- Insert default packages
INSERT INTO public.packages (name, description, price, features) VALUES
(
  'Starter Package',
  'Basic LLC formation with essential documents',
  50.00,
  '["LLC Formation", "Articles of Organization", "Operating Agreement Template", "EIN Application", "Email Support"]'::jsonb
),
(
  'Standard Package', 
  'Complete LLC setup with business banking',
  150.00,
  '["Everything in Starter", "Business Bank Account Setup", "Business Credit Card Application", "State Tax Registration", "Phone Support", "1 Year Registered Agent"]'::jsonb
),
(
  'Premium Package',
  'Full business launch with payment processing',
  250.00,
  '["Everything in Standard", "PayPal Business Account", "Stripe Account Setup", "Business Website Template", "Marketing Materials", "Priority Support", "Business Consultation Call"]'::jsonb
),
(
  'LLC + Amazon Package',
  'LLC formation plus Amazon seller account setup',
  800.00,
  '["Complete LLC Formation", "Amazon Seller Account Setup", "Product Research Training", "Amazon FBA Guide", "Tax Setup for Amazon", "Ongoing Support"]'::jsonb
),
(
  'LLC + Amazon + eBay Package',
  'Complete e-commerce business setup',
  1000.00,
  '["Everything in LLC + Amazon", "eBay Seller Account Setup", "Multi-channel Management", "eBay Store Design", "Cross-platform Training", "Advanced Business Strategies"]'::jsonb
);
