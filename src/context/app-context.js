import { createContext, useContext, useEffect, useReducer } from "react";

export const AppContext = createContext({});

// ? custom react hooks
// ? membuat function untuk mengganti dalam pemanggilan context dari AppContext tanpa harus import lagi
export function useAppContext() {
    return useContext(AppContext);
}

// ? membuat data user dan theme menjadi 1 state menggunakan useReducer

function reducer(state, action) {
    switch (action.type) {
        case 'updateUser':
            return { ...state, user: action.payload };
        // case 'toggleTheme':
        //     return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            throw new Error();
    }
}

const initialState = {
    user: {},
    // theme: 'light',
}

// ? membuat function atau component untuk membuat provider nya secara terpisah
export function AppProvider({ children }) {
    // ? dengan useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // ? data
        const user = {
            name: 'John Doe',
            avatar: 'https://randomuser.me/api/portraits/men/72.jpg',
        }

        // ? setState nya berupa object
        dispatch({
            type: 'updateUser',
            payload: user,
        });
    }, [])

    // ? variabel untuk menangkap data state user
    const appContextValue = [state, dispatch];

    return (
        <AppContext.Provider value={appContextValue}>
            {/* children isinya berupa component untuk passing data dari Provider */}
            {children}
        </AppContext.Provider>
    );
}
