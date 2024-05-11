"use client";
import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home({
	searchParams,
}: {
	searchParams: { search?: string };
}) {
	const search = searchParams.search;
	
	let subtitle = "Todos los Productos";
	if (search) {
		subtitle = `Buscar: ${search}`;
	}

	let result = products.filter((product) =>
		product.title
			.toLowerCase()
			.replace("'s", "")
			.includes(search?.toLowerCase() || "")
	);

	return (
		<>
			<Title title="Tienda" subtitle={subtitle} className="mb-2" />
			<ProductGrid products={result} />
		</>
	);
}
