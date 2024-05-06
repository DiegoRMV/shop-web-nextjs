import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
	initialData.products[0],
	initialData.products[1],
	initialData.products[2],
];

export default function Cart() {
	return (
		<div className="flex justify-center items-center mb-72 sm:px-10 px-4">
			<div className="flex flex-col w-[1000px]">
				<Title title="Verificar orden" />
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
					<div className="flex flex-col mt-5">
						<span>Ajustar elementos</span>
						<Link href={"/cart"} className="underline mb-5">
							Editar carrito
						</Link>

						{productsInCart.map((product) => (
							<div className="flex mb-5" key={product.slug}>
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
									<p>$ {product.price} x 3</p>
									<p className="font-bold">Subtotal: $ {product.price}</p>
								</div>
							</div>
						))}
					</div>

					<div className="bg-white rounded-xl shadow-xl p-4 sm:p-7 dark:bg-gray-900">
						<h2 className="text-2xl mb-2">Direccion de entrega</h2>
						<div className="mb-10">
							<p className="text-xl">Patricio Estrella</p>
							<p>Av. Discepolo 1024</p>
							<p>Zona Sur</p>
							<p>Cordoba capital</p>
							<p>Cordoba</p>
							<p>CP 5500</p>
							<p>123.456.789</p>
						</div>

						<div className="w-full rounded mb-10 bg-gray-200" />

						<h2 className="text-2xl mb-2">Resumen de Orden</h2>
						<div className="grid grid-cols-2">
							<span>No. Productos</span>
							<span className="text-right">3 articulos</span>

							<span>Subtotal</span>
							<span className="text-right">$ 100</span>

							<span>Impuestos (15%)</span>
							<span className="text-right">$ 100</span>
						</div>

						<div className="mt-5 mb-2 w-full">
							<p className="text-xs mb-3">
								<span>
									Al hacer click &quot;Colocar orden&quot;, aceptas nuestros{" "}
									<a href="#" className="underline">
										terminos y condiciones
									</a>{" "}
									y <a href="#">politica de privacidad</a>
								</span>
							</p>
							<Link
								className="flex btn-dark justify-center
							"
								href={"/orders/123"}
							>
								Colocar orden
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
