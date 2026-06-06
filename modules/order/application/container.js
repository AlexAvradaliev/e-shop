import { PrismaOrderRepository }
from "@/modules/order/infrastructure/repositories/PrismaOrderRepository";

import { CreateOrderUseCase }
from "./CreateOrderUseCase";

import { GetOrderByIdUseCase }
from "./GetOrderByIdUseCase";

import { GetOrdersUseCase }
from "./GetOrdersUseCase";

import { UpdateOrderStatusUseCase }
from "./UpdateOrderStatusUseCase";

const repository =
  new PrismaOrderRepository();

export const createOrderUseCase =
  new CreateOrderUseCase(
    repository
  );

export const getOrderByIdUseCase =
  new GetOrderByIdUseCase(
    repository
  );

export const getOrdersUseCase =
  new GetOrdersUseCase(
    repository
  );

export const updateOrderStatusUseCase =
  new UpdateOrderStatusUseCase(
    repository
  );
