import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

interface Props {
	params: {
		search: string;
	};
}

export default function Search({ params }: Props) {
	const { search } = params;
	const result = products.filter((product) =>
		product.title.toLowerCase().replace("'s", "").includes(search.toLowerCase())
	);

	return (
		<>
			<Title title={`Busqueda: ${search}`} className="mb-2" />
			<ProductGrid products={result} />
		</>
	);
}
