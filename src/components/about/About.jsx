import React from 'react'
import aboutBg from '../../assets/about.png'
import aboutImg from '../../assets/aboutImg.png'
import longArrow from '../../assets/longArrow.png'
import './about.scss'

function About() {
    return (
        <section className='about'>
            <div className='about__info'>
                <div className='about__info-item'>
                    <h1 className='about__info-item-title'>INTRODUCTION
                        <span className='about__info-item-title-size'> TO HYDRA VR</span></h1>
                    <img className='about__info-item-img' src={longArrow} alt="" />
                </div>
                <div className='about__info-item'>
                    <p className='about__info-item-text'>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>
            <div className='about__hydra'>
                <div className="about__hydra-item">
                    <img className='about__hydra-item-img' src={aboutImg} alt="" />
                    <img className="about__hydra-item-bg" src={aboutBg} alt="" />
                </div>
                <div className="about__hydra-item">
                    <h1 className='about__hydra-item-title'>
                        ABOUT <span className='about__hydra-item-title-size'>HYDRA VR</span>
                    </h1>
                    <p className='about__hydra-item-text'>
                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                        n tempor.
                    </p>
                    <button className='about__hydra-item-btn'>
                        LET’S GET IN TOUCH
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About