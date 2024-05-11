import { create } from "zustand";

interface State {
	isShowPassword: boolean;
	switchShowPassword: () => void;
}

export const useShowPassword = create<State>()((set) => ({
	isShowPassword: false,
	switchShowPassword: () =>
		set((state) => ({ isShowPassword: !state.isShowPassword })),
}));
