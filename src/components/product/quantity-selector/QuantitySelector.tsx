"use client";

import { Product } from "@/interface";
import { useUiCart } from "@/store";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
	quantity: number;
	product: Product;
}

export const QuantitySelector = ({ quantity, product }: Props) => {
	const [count, setCount] = useState(quantity);
	const addquantity = useUiCart((state) => state.addQuantity);
	const subtractuantity = useUiCart((state) => state.subtractQuantity);
	const q = useUiCart((state) => state.quantityProduct);

	
	const onQuantityAdd = () => {
		setCount(count + 1);
		addquantity(product);
	};
	
	const onQuantitySub = () => {
		if (count === 0) return;
		setCount(count - 1);
		subtractuantity();
	};
	
	console.log(q)
	return (
		<div className="flex">
			<button onClick={onQuantitySub}>
				<IoRemoveCircleOutline size={30} />
			</button>
			<span className="w-20 mx-3 bg-gray-100 text-center rounded dark:text-black flex justify-center items-center">
				{count}
			</span>
			<button onClick={onQuantityAdd}>
				<IoAddCircleOutline size={30} />
			</button>
		</div>
	);
};
