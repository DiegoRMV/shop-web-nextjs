import { Product } from "@/interface";
import { create } from "zustand";

interface State {
	quantityProduct: Product[];
	addQuantity: (p: Product) => void;
	subtractQuantity: () => void;
	resetQuantity: () => void;
}

export const useUiCart = create<State>()((set) => ({
	quantityProduct: [],
	addQuantity: (p) =>
		set((state) => ({ quantityProduct: state.quantityProduct.concat(p) })),
	subtractQuantity: () =>
		set((state) => ({ quantityProduct: state.quantityProduct.slice(0, -1) })),
	resetQuantity: () => set({ quantityProduct: [] }),
}));
