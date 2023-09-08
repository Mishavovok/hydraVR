import React from 'react'
import logo from '../../assets/logo.svg'
import footerBg from '../../assets/footer.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import pinterest from '../../assets/pinterest.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import './footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__item'>
                <img className='footer__item-logo' src={logo} alt="" />
            </div>
            <div className='footer__item'>
                <a className='footer__item-link' href="">ABOUT</a>
                <a className='footer__item-link' href="">SERVICES</a>
                <a className='footer__item-link' href="">TECHNOLOGIES</a>
                <a className='footer__item-link' href="">HOW TO</a>
                <a className='footer__item-link' href="">JOIN HYDRA</a>
            </div>
            <div className='footer__item'>
                <a className='footer__item-link' href="">F.A.Q</a>
                <a className='footer__item-link' href="">SITEMAP</a>
                <a className='footer__item-link' href="">CONDITIONS</a>
                <a className='footer__item-link' href="">LICENSES</a>
            </div>
            <div className='footer__network'>
                <h1 className='footer__network-title'>SOCIALIZE WITH HYDRA</h1>
                <div className='footer__network-blok'>
                    <a className='footer__network-link-img' href="">
                        <img src={facebook} alt="" />
                    </a>
                    <a className='footer__network-link-img' href="">
                        <img src={twitter} alt="" />
                    </a>
                    <a className='footer__network-link-img' href="">
                        <img src={linkedin} alt="" />
                    </a>
                    <a className='footer__network-link-img' href="">
                        <img src={youtube} alt="" />
                    </a>
                    <a className='footer__network-link-img' href="">
                        <img src={instagram} alt="" />
                    </a>
                    <a className='footer__network-link-img' href="">
                        <img src={pinterest} alt="" />
                    </a>
                </div>
                <button className='footer__network-btn'>BUILD YOUR WORLD</button>
            </div>
            <div>
                <h3 className='footer__rights'>2023 © HYDRA LANDING PAGE - BY ZINE. E.
                    FALOUTI - ALLRIGHTS RESERVED
                </h3>
            </div>
            <img className='footer__Bg' src={footerBg} alt="" />
        </footer>
    )
}

export default Footer