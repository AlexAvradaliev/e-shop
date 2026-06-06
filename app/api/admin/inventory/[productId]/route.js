export async function PATCH(request,{ params, inventoryContainer }) {
  const body = await request.json();
  const result = await inventoryContainer.adjustStockUseCase.execute({
    productId: params.productId,
    quantity: body.quantity,
  });
  return Response.json(result);
}
