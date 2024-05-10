"use client";
import { CartItem, OrderSummary, Title } from "@/components";
import { useStorage } from "@/hook/useStorage";
import { useUiNavbar } from "@/store";
import Link from "next/link";
import { useEffect } from "react";

export default function Cart() {
	const { userData, INITIAL } = useStorage();
	const quantityCart = useUiNavbar((state) => state.updateQuantityCart);

	useEffect(() => {
		INITIAL();
		quantityCart(userData?.cart.length || 0)
	}, [INITIAL]);

	return (
		<div className="flex justify-center items-center mb-72 sm:px-10 px-4">
			<div className="flex flex-col w-[1000px]">
				<Title title="Carrito" />
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
					<div className="flex flex-col mt-5">
						<span>Agregar mas items</span>
						<Link href={"/"} className="underline mb-5">
							Continuar comprando
						</Link>

						{userData?.cart.map((product) => (
							<CartItem key={product.slug} product={product} />
						))}
					</div>

					<OrderSummary />
				</div>
			</div>
		</div>
	);
}
