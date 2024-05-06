import { Product } from "@/interface";
import { ProductGridItem } from "./ProductGridItem";

interface Props {
	products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 lg:gap-10 mb-10">
			{products.map((product) => (
				<ProductGridItem key={product.slug} product={product} />
			))}
		</div>
	);
};
