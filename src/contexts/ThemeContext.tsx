import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/GlobalStyles';
import { darkTheme, lightTheme } from '../styles/Themes';

interface ThemeContextData {
    theme: string;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<string>('dark');

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    useEffect(() => {
        const storedTheme = Cookies.get('theme');
        setTheme(storedTheme || 'light');
    }, []);

    useEffect(() => {
        Cookies.set('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledComponentThemeProvider
                theme={theme === 'light' ? lightTheme : darkTheme}
            >
                <GlobalStyles />
                {children}
            </StyledComponentThemeProvider>
        </ThemeContext.Provider>
    );
};
