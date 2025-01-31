import { SetStateAction, createContext, ReactNode, useState, Dispatch, useContext, useEffect } from "react"
import { ThemeProvider as MuiThemeProvide } from "@mui/material/styles";
import { createTheme } from "@/src/theme";

type ThemeContextPros = {
    mode: string
    setMode: Dispatch<SetStateAction<'light' | 'dark'>>
}

const ThemeContext = createContext<ThemeContextPros | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const theme = createTheme(mode);

    useEffect(() => {
        const savedMode = localStorage.getItem('themeMode');

        if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
            setMode(savedMode);
        } else {
            setMode('light');
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            <MuiThemeProvide theme={theme}>
                {children}
            </MuiThemeProvide>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme need to be used with ThemeProvider");
    }
    return context;
}
