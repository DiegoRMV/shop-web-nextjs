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
	console.log(search);
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
		<div className="px-2 sm:px-6 lg:px-10">
			<Title title="Tienda" subtitle={subtitle} className="mb-2" />
			<ProductGrid products={result} />
		</div>
	);
}
