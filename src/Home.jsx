import React from 'react'
import STYLE from "./Home.module.css"
import IMG from "./media/mobile.png"
const Home = () => {
    return (
        <div className={STYLE.home}>
            <div className={STYLE.imgcont}>
                <div></div>
                <img src={IMG} alt="" />
            </div>
            <div className={STYLE.conbtn}>
                <h1>Play millions of songs and podcast, for free.</h1>
                <button className={STYLE.fbtn}>GET SPOTIFY FREE</button>
            </div>
        </div>
    )
}

export default Home
