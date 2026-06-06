# Order TDD package

Разархивирай съдържанието в root папката на проекта.

Пакетът добавя backend Order slice без UI:
- modules/order/domain/Order.js
- modules/order/application/*.js
- modules/order/infrastructure/repositories/PrismaOrderRepository.js
- modules/order/application/container.js
- app/api/admin/orders/route.js
- app/api/admin/orders/[id]/route.js
- tests/unit/order/*.test.js
- tests/unit/api/*Order*.test.js

След разархивиране пусни:

npm run test
npm run test:coverage

Ако coverage падне под 100%, най-вероятно има съществуващи файлове в проекта, които вече се включват в coverage. Прати отчета и ще затворим оставащите редове.
