// ? component untuk change atau merubah theme dari value appContextValue
import { useThemeContext } from "../context/theme-context";

export default function ToggleTheme() {
    // ? membuat variabel untuk memanggil context yang sebelumnya sudah di passing data state user
    // ? dan ini bentuknya array karna di appContextValue berisi array
    const [state, dispatch] = useThemeContext();

    return (
        <>
            {/* kita gunakan setTheme untuk update theme nya */}
            <button onClick={() => dispatch({ type: 'toggleTheme' })}>Toggle Theme</button>
        </>
    );
}