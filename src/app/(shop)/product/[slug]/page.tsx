"use client";
import { initialData } from "@/seed/seed";
import NotFound from "../not-found";
import { notFound } from "next/navigation";
import { titleFont } from "@/config/fonts";
import {
	ProducMobiletSlideShow,
	ProductSlideShow,
	QuantitySelector,
	SizeSelector,
} from "@/components";
import { useUiCart } from "@/store";
import { useEffect } from "react";
import { useStorage } from "@/hook/useStorage";

interface Props {
	params: {
		slug: string;
	};
}

export default function Product({ params }: Props) {
	const { slug } = params;
	const product = initialData.products.find((product) => product.slug === slug);
	const addquantity = useUiCart((state) => state.addQuantity);
	const res = useUiCart((state) => state.resetQuantity);
	const q = useUiCart((state) => state.quantityProduct);
	const { ADD } = useStorage();
	const addCart = () => {
		ADD(q);
		console.log(localStorage.getItem("userShop"))
	};

	if (!product) {
		notFound();
	}
	useEffect(() => {
		res();
		addquantity(product);
	}, []);


	return (
		<div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
			<div className="col-span-1 md:col-span-2">
				<ProducMobiletSlideShow
					title={product.title}
					images={product.images}
					className="block md:hidden"
				/>
				<ProductSlideShow
					title={product.title}
					images={product.images}
					className="hidden md:block"
				/>
			</div>

			<div className="col-span-1 px-5">
				<h1 className={`${titleFont} antialiased font-bold text-xl`}>
					{product.title}
				</h1>
				<p className="text-lg mb-5">$ {product.price}</p>

				<SizeSelector
					seletedSize={product.sizes[0]}
					availableSizes={product.sizes}
				/>

				<QuantitySelector quantity={1} product={product} />

				<button className="btn-primary my-5" onClick={addCart}>
					{" "}
					Agregar al carrito
				</button>
				<h3 className="font-bold text-sm">Description</h3>
				<p className="font-light">{product.description}</p>
			</div>
		</div>
	);
}
