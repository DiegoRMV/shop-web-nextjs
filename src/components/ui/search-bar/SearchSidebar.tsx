"use client";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { useUiStore } from "@/store";

export default function SearchSidebar() {
	const closeMenu = useUiStore((state) => state.closeSideMenu);
	const router = useRouter();
	const searchParams = useSearchParams();

	const search = searchParams.get("search") ?? "";
	const [valueSearch, setValueSearch] = useState(search);

	const handleSearch = (e: FormEvent<HTMLElement>) => {
		e.preventDefault();
		const newUrl = new URLSearchParams(searchParams);

		if (valueSearch.trim() === "") {
			newUrl.delete("search");
		} else {
			newUrl.set("search", valueSearch);
		}

		closeMenu();
		router.push(`/?${newUrl.toString()}`);
	};
	return (
		<form className="relative mt-14" onSubmit={(e) => handleSearch(e)}>
			<IoSearchOutline
				size={20}
				className="absolute top-2 left-2 text-slate-500"
			/>
			<input
				name="search"
				type="text"
				defaultValue={search}
				onChange={(e) => setValueSearch(e.target.value)}
				placeholder="Buscar"
				className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500 placeholder:text-slate-400 text-gray-950"
			/>
		</form>
	);
}
