import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Products() {
	return (
		<div className="px-2 sm:px-6 lg:px-10">
			<Title title="Busqueda: Todos" className="mb-2" />
			<ProductGrid products={products} />
		</div>
	);
}