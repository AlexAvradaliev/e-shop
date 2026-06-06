import { PrismaCartRepository }
from "@/modules/cart/infrastructure/repositories/PrismaCartRepository";

import { GetCartUseCase }
from "./GetCartUseCase";

import { AddToCartUseCase }
from "./AddToCartUseCase";

import { RemoveFromCartUseCase }
from "./RemoveFromCartUseCase";

import { UpdateCartItemQuantityUseCase }
from "./UpdateCartItemQuantityUseCase";

import { ClearCartUseCase }
from "./ClearCartUseCase";

const repository =
  new PrismaCartRepository();

export const getCartUseCase =
  new GetCartUseCase(
    repository
  );

export const addToCartUseCase =
  new AddToCartUseCase(
    repository
  );

export const removeFromCartUseCase =
  new RemoveFromCartUseCase(
    repository
  );

export const updateCartItemQuantityUseCase =
  new UpdateCartItemQuantityUseCase(
    repository
  );

export const clearCartUseCase =
  new ClearCartUseCase(
    repository
  );
