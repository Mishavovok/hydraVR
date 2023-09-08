
import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import logo_txt from '../../assets/logo_txt.svg'
import './nav.scss'

export default function nav() {
    const [menu, setMenu] = useState(false)
    return (
        <header>
            <nav className='nav'>
                <div className='nav__logo'>
                    <img className='logo__img' src={logo} alt="" />
                    <img className='logo__txt' src={logo_txt} alt="" />
                </div>
                <div className={menu ? "nav__link-activ" : "nav__link"}>
                    <a className='link' href="">ABOUT</a>
                    <a className='link' href="">SERVICES</a>
                    <a className='link' href="">TECHNOLOGIES</a>
                    <a className='link' href="">HOW TO</a>
                    <button className='btn__contact'>
                        <a className='contact-txt' href="">CONTACT US</a>
                    </button>
                    <button className='btn__join'>
                        <a className='join-txt' href="">JOIN HYDRA</a>
                    </button>
                </div>



                <div onClick={() => setMenu(!menu)} className="menu">
                    {menu ? <span className='menu__line-clouse'></span> : <>
                        <span className='menu__line'></span>
                        <span className='menu__short'></span>
                        <span className='menu__line'></span>
                    </>
                    }

                </div>
            </nav>

        </header>
    )
}

