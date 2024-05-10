import { create } from "zustand";

interface State {
	isSideMenuOpen: boolean;
	isDropdown: boolean;
	dropdown: () => void;
	openSideMenu: () => void;
	closeSideMenu: () => void;
}

export const useUiStore = create<State>()((set) => ({
	isSideMenuOpen: false,
	isDropdown: true,
	openSideMenu: () => set({ isSideMenuOpen: true }),
	closeSideMenu: () => set({ isSideMenuOpen: false, isDropdown: false }),
	dropdown: () => set((state) => ({ isDropdown: !state.isDropdown })),
}));
