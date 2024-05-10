"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { titleFont } from "@/config/fonts";
import { useUiNavbar, useUiStore } from "@/store";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
// import { DarkModee } from "../dark-mode/DarkModee";
import { DarkMode } from "../dark-mode/DarkMode";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export const TopMenu = () => {
	const TOP_OFFSET = 50;
	const [showBackground, setShowBackground] = useState(false);
	const openMenu = useUiStore((state) => state.openSideMenu);
	const quantity = useUiNavbar((state) => state.isQuantity);
	const [valueSearch, setValueSearch] = useState("");
	const router = useRouter();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= TOP_OFFSET) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleSearch = () => {
		router.push(`/products/${valueSearch}`);
	};

	return (
		<nav
			className={clsx(
				"flex px-5 justify-between items-center w-full sticky top-0 z-20",
				{
					"bg-gray-200 dark:bg-black": showBackground,
				}
			)}
		>
			<div className="flex xl:w-1/3">
				<Link href="/">
					<span
						className={`${titleFont} antialiased font-bold text-base sm:text-xl`}
					>
						GxShop
					</span>
				</Link>
			</div>
			<div className="hidden md:flex">
				<Link
					href={"/category/men"}
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 dark:hover:bg-neutral-800"
				>
					Hombres
				</Link>
				<Link
					href={"/category/women"}
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 dark:hover:bg-neutral-800"
				>
					Mujeres
				</Link>
				<Link
					href={"/category/kid"}
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 dark:hover:bg-neutral-800"
				>
					Niños
				</Link>
				<Link
					href={"/category/unisex"}
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 dark:hover:bg-neutral-800"
				>
					Unisex
				</Link>
			</div>

			<div className="flex items-center justify-end lg:w-1/3">
				<div className="hidden md:flex justify-center items-center border dark:border-white border-black">
					<IoSearchOutline size={24} className="mx-1" />
					<input
						id="search"
						name="search"
						type="text"
						onKeyUp={(e) => {
							if (e.keyCode === 13) toggleSearch();
						}}
						value={valueSearch}
						onChange={(e) => setValueSearch(e.target.value)}
						placeholder="Buscar"
						className="py-2 text-xs bg-transparent outline-none flex placeholder:text-gray-900 dark:placeholder:text-gray-400"
					/>
				</div>

				<Link
					href={"/cart"}
					className="my-2 mx-1 p-2 rounded-md transition-all hover:bg-gray-100 dark:hover:bg-neutral-800 hidden lg:block"
				>
					<div className="relative">
						<span
							className="absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-700
                        text-white -right-2"
						>
							{quantity}
						</span>
						<IoCartOutline className="w-5 h-5" />
					</div>
				</Link>
				<button className="my-2 mx-1 p-2 rounded-md transition-all hover:bg-gray-100 dark:hover:bg-neutral-800">
					<DarkMode />
				</button>
				<button
					className="m-2 px-4 py-2 rounded-md transition-all hover:bg-gray-100 dark:hover:text-black"
					onClick={openMenu}
				>
					Menu
				</button>
			</div>
		</nav>
	);
};
