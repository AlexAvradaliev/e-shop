import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

export default function ProductsView({ products, pagination }) {
	return (
		<main
			style={{
				maxWidth: '1400px',
				margin: '0 auto',
				padding: '40px',
			}}
		>
			<h1>Products</h1>
			<SearchBar />
			<ProductGrid products={products} />

			<Pagination
				page={pagination.page}
				pages={pagination.pages}
				search={pagination.search}
			/>
		</main>
	);
}
