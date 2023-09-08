import React from 'react'
import arrowDown from '../../assets/arrowDown.png'
import technologiesImg from '../../assets/technologiesImg.png'
import './technologies.scss'
function Technologies() {
    return (
        <section className='technologies'>
            <img className='technologies-img' src={technologiesImg} alt="" />
            <div className='technologies__bg'>
                <h1 className='technologies__bg-title'>TECHNOLOGIES & HARDWARE</h1>
                <h2 className='technologies__bg-text'>USED BY HYDRA VR.</h2>
            </div>
            <button className='technologies__btn'>
                <img src={arrowDown} alt="" />
            </button>
            <span className='technologies__shadow'></span>

        </section>
    )
}

export default Technologies