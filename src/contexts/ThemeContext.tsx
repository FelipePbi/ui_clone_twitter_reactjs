import { createContext, ReactNode, useEffect, useState, useMemo } from 'react';
import Cookies from 'js-cookie';

import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/GlobalStyles';
import THEMES from '../styles/Themes';

interface ThemeContextData {
    theme: string;
    changeTheme: (theme: string) => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<string>('blue');

    function changeTheme(theme: string) {
        setTheme(theme);
    }

    useEffect(() => {
        const storedTheme = Cookies.get('theme');
        setTheme(storedTheme || 'blue');
    }, []);

    useEffect(() => {
        Cookies.set('theme', theme);
    }, [theme]);

    const currentTheme = useMemo(() => {
        switch (theme) {
            case 'red':
            case 'blue':
            case 'orange':
            case 'green':
                return THEMES[theme];
        
            default:
                return THEMES.blue
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <StyledComponentThemeProvider
                theme={currentTheme}
            >
                <GlobalStyles />
                {children}
            </StyledComponentThemeProvider>
        </ThemeContext.Provider>
    );
};
