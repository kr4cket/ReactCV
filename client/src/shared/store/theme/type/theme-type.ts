export type Theme = "light" | "dark"

export type TStoreTheme = {
    theme: Theme
}

export type TActionTheme = {
    toggleTheme: () => void;
    setTheme: (newTheme: Theme) => void;
}