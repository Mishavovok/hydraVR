import React from 'react'
import rightArrow from '../../assets/shape.png'
import semicircle from '../../assets/semicircle.svg'
import heroImg from '../../assets/heroImg.png'
import heroImgBg from '../../assets/heroImgBg.png'
import './hero.scss'
function Hero() {
    return (
        <section className='hero'>
            <div className='hero__item'>
                <h1 className='hero__item-title'> <span className='hero__color'>Dive</span> Into The Depths
                    Of <span className='hero__color'>Virtual Reality</span> </h1>
                <p className='hero__item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    nisl tincidunt eget. Lectus mauris eros in vitae .
                </p>
                <div className='hero__item-start'>
                    <button className='hero__item-start-btn'>
                        BUILD YOUR WORLD
                    </button>
                    <img className='hero__item-start-img' src={rightArrow} alt="" />
                </div>
                <img className='hero__item-background' src={semicircle} alt="" />
            </div>
            <div className='hero__item-img'>
                <img className='hero__item-img-vr' src={heroImg} alt="" />
                <img className='hero__item-img-bg' src={heroImgBg} alt="" />
            </div>
        </section>
    )
}

export default Hero