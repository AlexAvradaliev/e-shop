import {
  getCategoriesUseCase,
} from "@/modules/category/application/container";

export default async function Page() {
  const categories =
    await getCategoriesUseCase.execute();

  return (
    <pre>
      {JSON.stringify(
        categories,
        null,
        2
      )}
    </pre>
  );
}