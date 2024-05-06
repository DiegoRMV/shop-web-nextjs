import Link from "next/link";
import React from "react";

export const OrderSummary = () => {
	return (
		<div className="h-fit bg-white dark:bg-gray-800 rounded-xl shadow-xl p-7">
			<h1 className="text-2xl mb-2">Resumen de Orden</h1>
			<div className="grid grid-cols-2">
				<span>No. Productos</span>
				<span className="text-right">3 articulos</span>

				<span>Subtotal</span>
				<span className="text-right">$ 100</span>

				<span>Impuestos (15%)</span>
				<span className="text-right">$ 100</span>
			</div>

			<div className="mt-5 mb-2 w-full">
				<Link
					className="flex btn-primary justify-center
							"
					href={"/checkout/address"}
				>
					Checkout
				</Link>
			</div>
		</div>
	);
};
