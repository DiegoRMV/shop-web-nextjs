import { ProductGrid, Title } from "@/components";
import { Category } from "@/interface";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const products = initialData.products;

interface Props {
	params: {
		id: Category;
	};
}

export default function PageCategory({ params }: Props) {
	const { id } = params;
	const productsFilter = products.filter((product) => product.gender === id);

	const labels: Record<Category, string> = {
		men: "Hombres",
		women: "Mujeres",
		kid: "Niños",
		unisex: "Todos",
	};

	return (
		<>
			<Title
				title={`Articulos para ${labels[id]}`}
				subtitle={`Todos los Productos`}
				className="mb-2"
			/>
			<ProductGrid products={productsFilter} />
		</>
	);
}
