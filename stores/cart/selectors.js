export const selectCartItems =
  (state) => state.items;

export const selectCartCount =
  (state) =>
    state.items.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );

export const selectCartTotal =
  (state) =>
    state.items.reduce(
      (sum, item) =>
        sum +
        item.price *
          item.quantity,
      0
    );

export const selectUniqueItemsCount =
  (state) => state.items.length;

export const selectIsCartEmpty =
  (state) => state.items.length === 0;

export const selectCartSubtotal =
  (state) =>
    state.items.reduce(
      (sum, item) =>
        sum +
        item.price *
          item.quantity,
      0
    );

export const selectCartTax =
  (
    state,
    taxRate = 0.2
  ) =>
    selectCartSubtotal(state) *
    taxRate;

export const selectCartGrandTotal =
  (
    state,
    taxRate = 0.2
  ) =>
    selectCartSubtotal(state) +
    selectCartTax(
      state,
      taxRate
    );