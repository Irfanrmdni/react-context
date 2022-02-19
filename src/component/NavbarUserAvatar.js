import { useAppContext } from "../context/app-context";

// ? component yg membutuhkan data user avatar
export default function NavbarUserAvatar() {
    // ? membuat variabel context yang isinya berupa useAppContext yang sebelumnya dibuat 
    const [state] = useAppContext();
    console.log('navbaruseravatar')
    return (
        <>
            <img src={state.user.avatar} alt="avatar" width="50" />
        </>
    );
}


