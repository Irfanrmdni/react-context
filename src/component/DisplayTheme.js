// ? component untuk menampilkan theme dari value useThemeContext
import { useThemeContext } from "../context/theme-context";

export default function DisplayTheme() {
    // ? membuat variabel context yang isinya berupa useThemeContext yang sebelumnya dibuat 
    // ? dan ini bentuknya array karna di useThemeContext berisi array
    const [state] = useThemeContext();
    console.log('displaytheme')
    return (
        <div>
            {state.theme}
        </div>
    );

}