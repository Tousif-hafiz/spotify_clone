import React from 'react'
import STYLE from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={STYLE.navbar}>
        <div>
            <span><i class="fa-brands fa-spotify" style={{color:"white"}}></i> <span>Spotify</span></span>
        </div>
        <ol className={STYLE.navi}>
            <li className={STYLE.ho}>Premium</li>
            <li className={STYLE.ho}>Support</li>
            <li className={STYLE.ho}>Download</li>
            <li>|</li>
            <li className={`${STYLE.greyc} ${STYLE.ho}`}>Sing up</li>
            <li className={`${STYLE.greyc} ${STYLE.ho}`}>Log in</li>
        </ol>
    </div>
  )
}

export default Navbar
