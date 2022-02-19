import { useAppContext } from "../context/app-context";

export default function Setting() {
    // ? membuat variabel untuk memanggil context yang sebelumnya sudah di passing data state user
    const [state, dispatch] = useAppContext();

    return (
        <>
            <input
                type="text"
                name="change name"
                placeholder="Change name"
                onChange={(e) =>
                    dispatch({
                        type: 'updateUser',
                        payload: {
                            ...state.user,
                            name: e.target.value,
                        },
                    })}
                value={state.user.name ?? ""}
            />
        </>
    );
}