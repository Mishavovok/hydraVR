import React from 'react'
import './join.scss'

function Join() {
    return (
        <section className='bg'>
            <div className='join'>
                <h1 className='join__title'>JOIN HYDRA</h1>
                <span className='join__line'></span>
                <p className='join__text'>Let’s Build Your VR Experience</p>
                <form className='join__form' action="">
                    <div className='join__form-contact'>
                        <input className='join__form-contact-inp' placeholder='First Name' type="text" />
                        <input className='join__form-contact-inp' placeholder='Last Name' type="text" />
                    </div>
                    <div className='join__form-contact'>
                        <input className='join__form-contact-inp' placeholder='Email' type="email" />
                        <input className='join__form-contact-inp' placeholder='Phone Number' type="tel" />
                    </div>
                    <input className='join__form-subject' placeholder='Subject' type="text" />
                    <textarea className='join__form-txt' name="" id="" cols="30" rows="10" placeholder='Tell Us Something...'></textarea>
                    <button className='join__form-btn'>SEND TO HYDRA</button>
                </form>
            </div>
        </section>

    )
}

export default Join