import React, {useState} from 'react';
import {anonymousUserInfo} from "./login";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {  Login, UserInfo } from "./login";
const userInfoStoreKey = 'userInfo'

let currentUser = anonymousUserInfo;
const storedUserInfoStr = sessionStorage.getItem(userInfoStoreKey);
if (storedUserInfoStr) {
    currentUser = JSON.parse(storedUserInfoStr)
}
export function LoginPage() {
    const [userInfo, setUserInfo] = useState(currentUser)

    function handleLogin(newUser) {
        setUserInfo(newUser);
        sessionStorage.setItem(userInfoStoreKey, JSON.stringify(newUser))
        // eslint-disable-next-line
        location.reload();
    }

    function handleLogout() {
        setUserInfo(anonymousUserInfo);
        sessionStorage.setItem(userInfoStoreKey, JSON.stringify(anonymousUserInfo))
        // eslint-disable-next-line
        location.reload();
    }
    return (
        <UserInfo.Provider value={userInfo}>
            <div className={'login_bar container'}>
                <h2>Login:</h2>
                <Login onLogin={handleLogin} onLogout={handleLogout} />
            </div>
        </UserInfo.Provider>
    )
}