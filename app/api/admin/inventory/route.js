export async function GET(request,{ inventoryContainer }) {
  const items = await inventoryContainer.inventoryRepository.findAll();
  return Response.json(items);
}
