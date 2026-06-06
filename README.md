# E-Shop V2 remaining backend modules

This zip contains JavaScript-only Clean Architecture/TDD files for:

- Coupon
- Inventory
- Payment
- User

## How to use

1. Copy the folders over the existing project root.
2. Merge `prisma/schema.additions.prisma` into your existing `prisma/schema.prisma`.
3. Run Prisma migration/generate.
4. Run Vitest coverage.

The files are intentionally backend-first. UI is not included because the project plan leaves Admin UI and Storefront UI for the final stage.
