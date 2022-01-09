import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from "./pages/home";
import {ContactUs} from "./pages/contact/contact-us";
import {NotFound} from "./pages/not-found";
import {Menu} from "./components/menu";
import {Products} from "./pages/products";
import {anonymousUserInfo, UserInfo} from "./pages/login/login";
import {useState} from "react";
import {AddProduct} from "./pages/admin/add-product";
import {LoginPage} from "./pages/login/login-page";
import {AboutUs} from "./pages/about/about-us";
import {Cart} from "./pages/cart/cart";

const userInfoStoreKey = 'userInfo'

let currentUser = anonymousUserInfo;
const storedUserInfoStr = sessionStorage.getItem(userInfoStoreKey);
if (storedUserInfoStr) {
    currentUser = JSON.parse(storedUserInfoStr)
}

function App() {
    const [userInfo, setUserInfo] = useState(currentUser)
    const [cart, setCart] = useState([]);

    function handleAddToCart(product) {
        setCart([...cart, product])
    }

    return (
        <div className="App">
            <UserInfo.Provider value={userInfo}>
                <BrowserRouter>
                    <div className={'header'}>
                        <p><a href={'/'}>Shinerr</a></p>
                        <Menu cart={cart}/>
                    </div>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/contact-us'} element={<ContactUs/>}/>
                        <Route path={'/about/us'} element={<AboutUs/>}/>
                        <Route path={'/products/*'} element={<Products onAddToCart={handleAddToCart}/>}/>
                        <Route path={'/login-page'} element={<LoginPage/>}/>
                        <Route path={'/admin/add-product'} element={<AddProduct/>}/>
                        <Route path={'/cart'} element={<Cart cart={cart}/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>

            </UserInfo.Provider>
            <div className={'footer_container'}>
                <div className={'footer_block'}>
                    <div className={'social_links'}>
                        <div className={'facebook_link'}>
                            <a href={'https://www.facebook.com/'}><img
                                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png'}
                                alt={'fb'}/> </a>
                        </div>
                        <div className={'Instagram_link'}>
                            <a href={'https://twitter.com/home?lang=ro'}><img
                                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png'}
                                alt={'fb'}/> </a>
                        </div>
                        <div className={'Twitter_link'}>
                            <a href={'https://www.instagram.com/'}><img
                                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png'}
                                alt={'fb'}/> </a>
                        </div>
                    </div>
                    <div className={'paragraphs'}>
                        <p>Info</p>
                        <p>Support</p>
                        <p>Marketing</p>
                    </div>
                    <div className={'paragraphs'}>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className={'paragraphs_block'}>
                    <div>
                        <p>Tel: +40746170921</p>
                        <p>Fix: +4021954687</p>
                        <p>Fax: +4021954687</p>
                        <a href={'mailto:shinerr@gmail.com'}>Email: shinerr@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className={'copyright_block'}>
                <p className={'copyright'}>Copyright 2022</p>
            </div>
        </div>
    );
}

export default App;
