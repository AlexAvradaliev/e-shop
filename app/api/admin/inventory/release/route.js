export async function POST(request,{ inventoryContainer }) {
  const body = await request.json();
  const result = await inventoryContainer.releaseStockUseCase.execute(body);
  return Response.json(result);
}
