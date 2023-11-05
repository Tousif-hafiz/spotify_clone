import React from 'react'
import STYLE from "./Home2.module.css"

const Home2 = () => {
    return (
        <div className={STYLE.main_block}>
            <h1>Why Spotify?</h1>
            <div className={STYLE.parent}>
                <div className={STYLE.child}>
                    <div className={STYLE.logo}>
                    <i class="fa-solid fa-circle-play" style={{color: "#ffffff"}}></i>
                    </div>
                    <div className={STYLE.cont}>
                        <h4>Play your favorites.</h4>
                        <p>Listen to the songs you love, and discover new music and podcasts.</p>
                    </div>
                </div>
                <div className={STYLE.child}>
                <div className={STYLE.logo}>
                <i class="fa-solid fa-lines-leaning" style={{color: "#ffffff"}} ></i>
                </div>
                    <div className={STYLE.cont}>
                        <h4>Playlists made easy.</h4>
                        <p>We'll help you make playlists. Or enjoy playlists made by music experts.</p>
                    </div>
                </div>
                <div className={STYLE.child}>
                <div className={STYLE.logo}>
                <i class="fa-brands fa-gratipay" style={{color: "#ffffff"}}></i>
                </div>
                    <div className={STYLE.cont}>
                        <h4>Make it yours.</h4>
                        <p>Tell us what you like, and we'll recommend music for you.</p>
                    </div>
                </div>
                <div className={STYLE.child}>
                <div className={STYLE.logo}>
                <i class="fa-solid fa-bolt" style={{color: "#ffffff"}}></i>
                </div>
                    <div className={STYLE.cont}>
                        <h4>Save mobile data.</h4>
                        <p>To use less data when you play music, turn on Data Saver in Settings.</p>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Home2
