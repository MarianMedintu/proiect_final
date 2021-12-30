import { useForm } from "../utils/use-form";
import { createContext, useContext, useState } from "react";

export const anonymousUserInfo = {
    id: null,
    name: 'Anonymus',
    password: '',
    isAdmin: false
}
export const UserInfo = createContext(anonymousUserInfo);

export function Login({onLogin, onLogout}) {
    const currenUserInfo = useContext(UserInfo);
    const [formValues, formProps] = useForm({
        username: "",
        password: ""
    })

    const [loginError, setLoginError] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setLoginError(null);
        fetch('http://localhost:3001/users')
            .then((r) => r.json())
            .then((userList) => {
                const foundUser = userList.find((user) => {
                    return user.username === formValues.username && user.password === formValues.password
                })
                if (!foundUser) {
                    setLoginError('Invalid username or passowrd')
                } else {
                    if (typeof onLogin === "function") {
                        onLogin(foundUser);
                    }
                }
            })
    }

    if (currenUserInfo.id) {
        return (
            <div>
                Hello: {currenUserInfo.name}
                <button onClick={onLogout}>Logout</button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" {...formProps.username} />
            <input type="password" {...formProps.password} />
            <button type={'submit'}>Login</button>
            {loginError && (
                <div>{loginError}</div>
            )}
        </form>
    )
}
