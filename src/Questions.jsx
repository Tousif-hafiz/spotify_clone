import React from 'react'
import STYLE from "./Questions.module.css"

const Questions = () => {
    return (
        <div className={STYLE.mainlogo}>
            <h1>Got Question?</h1>
            <div className={STYLE.question}><h4>How do I create a playlist?</h4> <i class="fa-solid fa-caret-down"></i></div>
            <div className={STYLE.answer}>Playlists are a great way to save collections of music, either for your own listening or to share. <br />
            To create one: <br />
            <ol>
                <li>Tap Your Library.</li>
                <li>Tap <span className={STYLE.greenc}>Create</span></li>
                <li>Give your playlist a name.</li>
                <li>Start adding songs (and we'll help you along).</li>
            </ol>
            </div>
            <div className={STYLE.question}><h4>How do I activate Data Saver mode?</h4> <i class="fa-solid fa-caret-down"></i></div>
            <div className={STYLE.answer}>
                <ol >
                    <li>Tap <span>Home.</span></li>
                    <li>Tap <span>Setting.</span></li>
                    <li>Tap <span>Data Saver.</span></li>
                    <li>Switch on Data Saver.</li>
                </ol>
            </div>
            <div className={STYLE.question}><h4>Is it only possible to shuffle play music?</h4> <i class="fa-solid fa-caret-down"></i></div>
            <div className={STYLE.answer}>
                Any playlist with the shuffle icon will play on shuffle. <br />
                Some playlists won't have the shuffle icon, so you can tap any song to play it.
            </div>
            <div className={STYLE.question}><h4>Where can i find Podcasts?</h4> <i class="fa-solid fa-caret-down"></i></div>
            <div className={STYLE.answer}> Tap <span>Search.</span> Under Browse All, tap Podcasts</div>
        </div>
    )
}

export default Questions
