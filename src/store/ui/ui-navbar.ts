import { create } from "zustand";

interface State {
	isQuantity: number;
	updateQuantityCart: (quality: number) => void;
	// quantityCart: ()=>number;
}

export const useUiNavbar = create<State>()((set) => ({
	isQuantity: 0,
	updateQuantityCart: (quantity) =>
		set({
			isQuantity: quantity,
		}),
}));
