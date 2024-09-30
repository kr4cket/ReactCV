import create from "zustand";
import { TActionTheme, Theme, TStoreTheme } from "./type/theme-type";

export const useStoreTheme = create<TStoreTheme & TActionTheme>((set) => {
    const mediaQuery = "(prefers-color-sheme: dark)"
    const systemPrefersDark = window.matchMedia(mediaQuery).matches;
    const savedTheme = (localStorage.getItem("theme") as Theme);
    const initalTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    const handleSystemTheme = (e: MediaQueryListEvent) => {
        set(() => {
            const newTheme = e.matches ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return {theme: newTheme}
        })
    }

    window.matchMedia(mediaQuery).addEventListener("change", handleSystemTheme)

    return {
        theme: initalTheme,
        toggleTheme: () => set((state) => {
            const newTheme = state.theme === "light" ? "dark" : "light"
            localStorage.setItem("theme", newTheme);
            return {theme: newTheme}
        }),
        setTheme: (newTheme) => set(() => {
            localStorage.setItem("theme", newTheme)
            return{theme: newTheme}
        })
    }
})