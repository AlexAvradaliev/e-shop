'use client';

import { useCartStore }
from '@/stores/cart/store';

import {
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from '@/stores/cart/selectors';

export function useCart() {
  const items =
    useCartStore(selectCartItems);

  const count =
    useCartStore(selectCartCount);

  const total =
    useCartStore(selectCartTotal);

  const addItem =
    useCartStore(
      (state) => state.addItem
    );

  const removeItem =
    useCartStore(
      (state) => state.removeItem
    );

  const clearCart =
    useCartStore(
      (state) => state.clearCart
    );

  return {
    items,
    count,
    total,
    addItem,
    removeItem,
    clearCart,
  };
}