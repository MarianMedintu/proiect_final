import {useForm} from "../../utils/use-form";
import React, {createContext, useContext, useState} from "react";
import './login-page.scss'

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
        fetch('http://localhost:3000/users')
            .then((r) => r.json())
            .then((userList) => {
                const foundUser = userList.find((user) => {
                    return user.username === formValues.username && user.password === formValues.password
                })
                if (!foundUser) {
                    setLoginError('Invalid username or password')
                } else {
                    if (typeof onLogin === "function") {
                        onLogin(foundUser);
                    }
                }
            })
    }

    if (currenUserInfo.id) {
        return (
            <div className={'loggedIn_block'}>
                <div>
                    Hello: {currenUserInfo.name}
                </div>
                <button className={'logout'} onClick={onLogout}>Logout</button>
            </div>
        )
    }

    return (
        <form className={'login_form'} onSubmit={handleSubmit}>
            <div className={'login_field'}>
                <label className={'form_label'} htmlFor={'username'}>Username:</label>
                <input className="form_input username" id={"username"}
                       placeholder={'Type your username here'} {...formProps.username} />
            </div>
            <div className={'login_field'}>
                <label className={'form_label'} htmlFor={'password'}>Password:</label>
                <input className="form_input password" type={'password'}
                       placeholder={'Type your password here'} {...formProps.password} />
            </div>
            <div className={'checkbox-area'}>
                <label className={'form_checkbox'}>
                    <input type={'checkbox'}/>
                    <span className={'checkbox'}></span>
                    <p className={'consent_text'}>
                        Keep me logged in.
                    </p>
                </label>
            </div>
            <button type={'submit'}>Login</button>
            <p><a href={'/'}>Register</a></p>
            <div className={'alternative_login'}>
                <div className={'facebook_login'}>
                    <img
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png'}
                        alt={'facebook logo'} to={'https://www.facebook.com'}/>
                    <p><a href={'https://www.facebook.com'}>Login with Facebook account</a></p>
                </div>
                <div className={'google_login'}>
                    <img
                        src={'https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20210618182605%21Google_%22G%22_Logo.svg'}
                        alt={'google logo'}/>
                    <p><a href={'https://www.google.com'}> Login with Google account</a></p>
                </div>

            </div>
            {loginError && (
                <div>{loginError}</div>
            )}
        </form>
    )
}
