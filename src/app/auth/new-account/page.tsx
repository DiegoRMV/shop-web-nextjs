import { titleFont } from "@/config/fonts";
import Link from "next/link";

export default function NewAccount() {
	return (
		<div className="flex flex-col min-h-screen pt-20">
			<h1 className={`${titleFont.className} text-4xl mb-5`}>Nueva Cuenta</h1>

			<div className="flex flex-col">
				<label htmlFor="text">Nombre Completo</label>
				<input
					className="px-5 py-2 border bg-gray-200 rounded mb-5 dark:text-black"
					type="text"
					placeholder="john Doe"
				/>
				<label htmlFor="email">Correo Electronico</label>
				<input
					className="px-5 py-2 border bg-gray-200 rounded mb-5 dark:text-black"
					type="email"
					placeholder="jhondoe@gmail.com"
				/>

				<label htmlFor="password">Contraseña</label>
				<input
					name="password"
					className="px-5 py-2 border bg-gray-200 rounded mb-5 dark:text-black"
					type="text"
					placeholder="******"
				/>
				<label htmlFor="repeatPassword">Repetir Contraseña</label>
				<input
					name="repeatPassword"
					className="px-5 py-2 border bg-gray-200 rounded mb-5 dark:text-black"
					type="text"
					placeholder="******"
				/>
				<button className="btn-primary">Crear Cuenta</button>

				{/* divisor l ine */}
				<div className="flex items-center my-5">
					<div className="flex-1 border-t border-gray-500"></div>
					<div className="px-2 text-gray-800">O</div>
					<div className="flex-1 border-t border-gray-500"></div>
				</div>

				<Link href="/auth/login" className="btn-secondary text-center">
					Ingresar
				</Link>
			</div>
		</div>
	);
}
