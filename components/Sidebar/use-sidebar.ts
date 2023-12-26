import { create } from "zustand";

interface SidebarState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}
export const useSidebar = create<SidebarState>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
