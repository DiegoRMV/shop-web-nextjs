"use client";
import { useUiStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import {
	IoCartOutline,
	IoCloseOutline,
	IoLogInOutline,
	IoLogOutOutline,
	IoPeopleOutline,
	IoPersonOutline,
	IoSearchOutline,
	IoShirtOutline,
	IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
	const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
	const closeMenu = useUiStore((state) => state.closeSideMenu);

	return (
		<div>
			{isSideMenuOpen && (
				<>
					<div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
					<div
						onClick={closeMenu}
						className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
					/>
				</>
			)}

			<nav
				className={clsx(
					"fixed p-5 right-0 top-0 max-w-screen w-full sm:w-fit h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 dark:bg-slate-950",
					{
						"translate-x-full": !isSideMenuOpen,
					}
				)}
			>
				<IoCloseOutline
					size={50}
					className="absolute top-5 right-5 cursor-pointer"
					onClick={closeMenu}
				/>

				<div className="relative mt-14">
					<IoSearchOutline
						size={20}
						className="absolute top-2 left-2 text-slate-500"
					/>
					<input
						name="search"
						type="text"
						onKeyUp={(e) => {
							if (e.keyCode === 13) closeMenu();
						}}
						placeholder="Buscar"
						className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500 placeholder:text-slate-400"
					/>
				</div>
				<Link
					href={"/"}
					onClick={closeMenu}
					className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all dark:hover:bg-slate-800"
				>
					<IoPersonOutline size={30} />
					<span className="ml-3 text-xl">Perfil</span>
				</Link>
				<Link
					href={"/orders"}
					onClick={closeMenu}
					className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all dark:hover:bg-slate-800"
				>
					<IoTicketOutline size={30} />
					<span className="ml-3 text-xl">Ordenes</span>
				</Link>
				<Link
					href={"/auth/login"}
					onClick={closeMenu}
					className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all dark:hover:bg-slate-800"
				>
					<IoLogInOutline size={30} />
					<span className="ml-3 text-xl">Ingresar</span>
				</Link>
				<Link
					href={"/"}
					onClick={closeMenu}
					className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all dark:hover:bg-slate-800"
				>
					<IoLogOutOutline size={30} />
					<span className="ml-3 text-xl">Salir</span>
				</Link>
				<div className="w-full h-px bg-gray-400 my-6" />

				<Link
					href={"/"}
					onClick={closeMenu}
					className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all dark:hover:bg-slate-800"
				>
					<IoShirtOutline size={30} />
					<span className="ml-3 text-xl">Products</span>
				</Link>
				<Link
					href={"/"}
					onClick={closeMenu}
					className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all dark:hover:bg-slate-800"
				>
					{/* <IoTicketOutline size={30} /> */}
					<IoCartOutline size={30} />
					<span className="ml-3 text-xl">Cart</span>
				</Link>
				<Link
					href={"/"}
					onClick={closeMenu}
					className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all dark:hover:bg-slate-800"
				>
					<IoPeopleOutline size={30} />
					<span className="ml-3 text-xl">Usuarios</span>
				</Link>
			</nav>
		</div>
	);
};
