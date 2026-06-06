# E-Shop V2 - Active Project Status

## Current rule

`legacy/` is an archive folder.

Files moved to `legacy/` must not be imported by active code and must not participate in tests or coverage.

## Active development rule

Continue only with tested Clean Architecture code:

- `modules/`
- `app/api/`
- `tests/`
- current shared utilities that are covered by tests

## Coverage

Vitest keeps global thresholds at 100%:

- statements: 100
- branches: 100
- functions: 100
- lines: 100

`legacy/`, `coverage/`, `.next/`, `node_modules/`, and `prisma-backup/` are excluded from test discovery / coverage.

## Coupon API added

Routes:

- `GET /api/admin/coupons`
- `POST /api/admin/coupons`
- `GET /api/admin/coupons/code/[code]`
- `DELETE /api/admin/coupons/[id]`

Tests:

- `tests/unit/api/CouponRoutes.test.js`
- `tests/unit/coupon/CouponUseCases.test.js` updated with `GetCouponsUseCase`
- `tests/unit/containers/Containers.test.js` updated with `getCouponsUseCase`
