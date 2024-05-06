"use client";

import { Size } from "@/interface";
import clsx from "clsx";
import { useState } from "react";

interface Props {
	seletedSize: Size;
	availableSizes: Size[];
}

export const SizeSelector = ({ seletedSize, availableSizes }: Props) => {
	const [selected, setSelected] = useState(seletedSize);

	const toogleSizeSelector = (size: Size) => {
		setSelected(size);
	};

	return (
		<div className="my-5">
			<h3 className="font-bold mb-4">Tallas Disponibles</h3>
			<div className="flex">
				{availableSizes.map((size) => (
					<button
						key={size}
						onClick={() => toogleSizeSelector(size)}
						className={clsx(
							"mx-2 hover:underline text-lg underline-offset-[5px] decoration-2",
							{
								underline: size === selected,
							}
						)}
					>
						{size}
					</button>
				))}
			</div>
		</div>
	);
};
