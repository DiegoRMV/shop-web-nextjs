"use client";
import { titleFont } from "@/config/fonts";
import { useShowPassword } from "@/store";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function Profile() {
	const isShow = useShowPassword((state) => state.isShowPassword);
	const switchShow = useShowPassword((state) => state.switchShowPassword);

	const profile = {
		name: "Jhon Doe",
		email: "jhondoe@gmail.com",
		password: 12345,
	};

	return (
		<div className="flex flex-col min-h-screen pt-20">
			<h1 className={`${titleFont.className} text-4xl mb-5`}>Perfil</h1>

			<div className="flex flex-col">
				<label htmlFor="text">Nombre Completo</label>
				<input
					className="px-5 py-2 border bg-gray-200 rounded mb-5 dark:text-black"
					type="text"
					defaultValue={profile.name}
				/>
				<label htmlFor="email">Correo Electronico</label>
				<input
					className="px-5 py-2 border bg-gray-200 rounded mb-5 dark:text-black"
					type="email"
					defaultValue={profile.email}
				/>

				<label htmlFor="password">Contraseña</label>
				<div className="relative mb-5 p-0">
					<input
						className="border px-5 py-2 bg-gray-200 rounded w-full dark:text-black"
						type={isShow ? "text " : "password"}
						defaultValue={profile.password}
					/>
					<button className="absolute top-3 right-3 dark:text-black" onClick={switchShow}>
						{!isShow ? (
							<FaRegEye
								size={20}
								className="hover:text-blue-900 cursor-pointer"
							/>
						) : (
							<FaRegEyeSlash
								size={20}
								className="hover:text-blue-900 cursor-pointer"
							/>
						)}
					</button>
				</div>

				<button className="btn-primary">Editar Perfil</button>

				{/* divisor l ine */}
				<div className="flex items-center my-5">
					<div className="flex-1 border-t border-gray-500"></div>
					<div className="px-2 text-gray-800">O</div>
					<div className="flex-1 border-t border-gray-500"></div>
				</div>
			</div>
		</div>
	);
}
