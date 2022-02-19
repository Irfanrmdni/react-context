import { useReducer } from "react";

// ? contoh component untuk membuat counter dengan useReducer
// ? dengan useReducer untuk setState baru kita tulisnya didalam function reducer. dengan cara return

// ? ketika mengeksekusi () => setCount(count + 1) maka dia akan mengeksekusi juga function reducer
// ? parameter state sama dengan [count] dan action sama dengan [setCount] atau setCount(count + 1)

function reducer(state, action) {
    switch (action.type) {
        // ? return nya berupa object karna initialState nya object dan kita lakukan merge supaya theme nya tidak hilang
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };

        // ? case untuk toggle theme
        case 'toggleTheme':
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            throw new Error();
    }
}

const initialState = {
    count: 0,
    theme: 'light',
}

export default function Reducer() {
    // ? contoh dengan membuat initialState nya berupa object
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <button onClick={() => dispatch({ type: 'decrement', payload: 2 })}>-</button>
            <span>{state.count}</span>
            <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>+</button>

            <br /><hr />

            <span>{state.theme}</span>
            <br />
            <button onClick={() => dispatch({ type: 'toggleTheme' })}>toggle theme</button>
        </>
    );
}