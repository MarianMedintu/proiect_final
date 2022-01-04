import React from 'react';
import './home.scss'
import Home_First from '../images/home/Home_First_pic.jpeg'

export function Home() {

    return (
        <div className={'home'}>
            <div style={{backgroundImage: "url(" + Home_First + ")"}}>
                <div className={'container'}>
                    <h2>Mind & Body</h2>
                    <p>Take a fragrance-filled journey into wellness.</p>
                    <button>Shop now!</button>
                </div>
            </div>

        </div>
    )
}
