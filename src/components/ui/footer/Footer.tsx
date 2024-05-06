import { titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";

export const Footer = () => {
	return (
		<div className="flex w-full justify-center items-center text-xs sm:text-sm lg:text-base py-8 border-t-2 border-gray-500 dark:border-t-2 dark:border-gray-700">
			<Link href={"/"}>
				<span className={`${titleFont.className} antialiased font-bold`}>
					Gx
				</span>
				<span> | Shop </span>
				<span>{new Date().getFullYear()}</span>
			</Link>
			<Link href={"/"} className="mx-3">
				<span>Privacy & Legal</span>
			</Link>
			<Link href={"/"} className="mx-3">
				<span>Locations</span>
			</Link>
		</div>
	);
};
