// ? memisahkan context theme yang ada di app-context
import { createContext, useContext, useReducer } from "react";

// membuat variabel untuk membuat context
export const ThemeContext = createContext({});

// membuat function yg mereturn context agar dalam pemanggilan context nya cukup dengan useThemeContext().
// tanpa perlu import lagi
export function useThemeContext() {
    return useContext(ThemeContext);
}

// function reducer untuk theme
function reducer(state, action) {
    switch (action.type) {
        case 'toggleTheme':
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            throw new Error();
    }
}

const initialState = {
    theme: 'light',
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const themeContextValue = [state, dispatch];

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
}
