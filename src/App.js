import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/home";
import { ContactUs } from "./pages/contact-us";
import { NotFound } from "./pages/not-found";
import { Menu } from "./components/menu";
import { Products } from "./pages/products";
import { About } from "./pages/about/about";
import { anonymousUserInfo, Login, UserInfo } from "./components/login";
import { useState } from "react";
import { AddProduct } from "./pages/admin/add-product";


const userInfoStoreKey = 'userInfo'

let currentUser = anonymousUserInfo;
const storedUserInfoStr = sessionStorage.getItem(userInfoStoreKey);
if (storedUserInfoStr) {
  currentUser = JSON.parse(storedUserInfoStr)
}

function App() {
  const [userInfo, setUserInfo] = useState(currentUser)

  function handleLogin(newUser) {
    setUserInfo(newUser);
    sessionStorage.setItem(userInfoStoreKey, JSON.stringify(newUser))
  }

  function handleLogout() {
    setUserInfo(anonymousUserInfo);
    sessionStorage.setItem(userInfoStoreKey, JSON.stringify(anonymousUserInfo))
  }

  return (
      <div className="App">
        <UserInfo.Provider value={userInfo}>
          <BrowserRouter>

            <div className={'header'}>
              <div className={'login_bar container'}>
                <p>Shinerr</p>
                <Login onLogin={handleLogin} onLogout={handleLogout} />
              </div>
              <Menu />

            </div>
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/contact-us'} element={<ContactUs />} />
              <Route path={'/about/*'} element={<About />} />
              <Route path={'/produse/*'} element={<Products />} />
              <Route path={'/admin/add-product'} element={<AddProduct />} />
              <Route path={'*'} element={<NotFound />} />
            </Routes>
            <div>
              footer copyright 2021
            </div>
          </BrowserRouter>

        </UserInfo.Provider>
      </div>
  );
}

export default App;
