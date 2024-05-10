"use client";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const search = searchParams.get("search") ?? "";
	const [valueSearch, setValueSearch] = useState("");

	const handleSearch = (e: void) => {
		const newUrl = new URLSearchParams(searchParams);

		if (valueSearch.trim() === "") {
			newUrl.delete("search");
		} else {
			newUrl.set("search", valueSearch);
		}

		router.push(`/?${newUrl.toString()}`);
	};
	return (
		<form className="hidden md:flex justify-center items-center border dark:border-white border-black">
			<IoSearchOutline size={24} className="mx-1" />
			<input
				id="search"
				name="search"
				type="text"
				defaultValue={search}
				onChange={(e) => setValueSearch(e.target.value)}
				onKeyDown={(e) => {
					if (e.keyCode === 13) handleSearch(e.preventDefault());
				}}
				placeholder="Buscar"
				className="py-2 text-xs bg-transparent outline-none flex placeholder:text-gray-900 dark:placeholder:text-gray-400"
			/>
		</form>
	);
}
