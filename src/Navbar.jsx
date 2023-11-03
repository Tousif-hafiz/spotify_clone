import React from 'react'
import STYLE from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={STYLE.navbar}>
        <div>
            <span><i class="fa-brands fa-spotify" style={{color:"white"}}></i> <span>Spotify</span></span>
        </div>
        <ol>
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
            <li>|</li>
            <li>Sing up</li>
            <li>Log in</li>
        </ol>
    </div>
  )
}

export default Navbar
