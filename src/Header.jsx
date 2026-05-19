import { useState } from 'react'
import heroImg from './assets/hero.png'
import './Header.css'

function Header (){
    return (
        <div>
            <img src={heroImg} className="base" width="170" height="179" alt="" />
        </div> 
    )
}

export default Header