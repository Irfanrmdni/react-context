import { useAppContext } from "../context/app-context";

// ? component yg membutuhkan data user name
export default function NavbarUserText() {
    // ? membuat variabel untuk memanggil context yang sebelumnya sudah di passing data state user
    const [state] = useAppContext();
    console.log('navbarusertext')
    return (
        <>
            <span>Hi. {state.user.name}</span>
        </>
    );
}