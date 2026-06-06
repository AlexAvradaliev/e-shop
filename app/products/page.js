import {
  getProductsPaginatedUseCase,
} from "@/modules/catalog/application/container";

import ProductsView
  from "@/modules/catalog/presentation/views/ProductsView";

export default async function ProductsPage({
  searchParams,
}) {
 const {
  page,
  q,
  category,
  brand,
} = await searchParams;

  const result =
   await getProductsPaginatedUseCase.execute({
  page: Number(page) || 1,
  search: q || "",
  category: category || "",
  brand: brand || "",
});

  return (
    <ProductsView
      products={result.products}
      pagination={result.pagination}
    />
  );
}