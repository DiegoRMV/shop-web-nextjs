import { Product } from "@/interface";
import Image from "next/image";
import React from "react";

interface Props {
	product: Product;
}

export const CartItem = ({ product }: Props) => {
	return (
		<div className="flex mb-5 shadow-xl" key={product.slug}>
			<Image
				src={`/products/${product.images[0]}`}
				width={100}
				height={100}
				style={{
					width: "100px",
					height: "100px",
				}}
				alt={product.title}
				priority
				className="mr-5 rounded"
			/>

			<div>
				<p>{product.title}</p>
				<p>$ {product.price}</p>

				{/* <QuantitySelector quantity={3} /> */}
				<button className="underline mt-3">Remover</button>
			</div>
		</div>
	);
};
