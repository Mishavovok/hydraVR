import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import geo from '../../assets/geo.png'
import sliderright from '../../assets/sliderright.png'
import sliderleft from '../../assets/sliderleft.png'
import telephone from '../../assets/telephone.png'
import email from '../../assets/email.png'


import 'swiper/css';
import './contact.scss'

function Contact() {
    const SlideRef = useRef()

    const handelNext = () => {
        SlideRef.current.swiper.slideNext()
    }

    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev()
        console.log('clik')
    }

    return (
        <section className='contact'>
            <div className='contact__geo'>
                <img className='contact__img' src={geo} alt="" />
                <div className='contact__blok'>
                    <h2 className='contact__blok-title'>Pay Us a Visit</h2>
                    <p className='contact__blok-text'>Union St, Seattle, WA 98101, United States</p>
                </div>
            </div>

            <div className='contact__phone'>
                <img className='contact__img' src={telephone} alt="" />
                <div className='contact__blok'>
                    <h2 className='contact__blok-title'>Give Us a Call</h2>
                    <p className='contact__blok-text'>(110) 1111-1010</p>
                </div>
            </div>

            <div className='contact__email'>
                <img className='contact__img' src={email} alt="" />
                <div className='contact__blok'>
                    <h2 className='contact__blok-title'>Send Us a Message</h2>
                    <p className='contact__blok-text'>Contact@HydraVTech.com</p>
                </div>
            </div>
            <div className='contact__slider'>
                <button className='button__next' onClick={handelNext}>
                    <img src={sliderleft} alt="" />
                </button>
                <Swiper
                    loop={true}
                    ref={SlideRef}
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={false}
                    modules={[Navigation]}
                    className="mySwiper">

                    <SwiperSlide>
                        <div className='contact__slider-1'>
                            <img src={geo} alt="" />
                            <p className='contact__slider-1-txt'>Union St, Seattle, WA 98101,
                                United States</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='contact__slider-1'>
                            <img src={telephone} alt="" />
                            <p className='contact__slider-1-txt'>Give Us a Call
                                (110) 1111-1010</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='contact__slider-1'>
                            <img src={email} alt="" />
                            <p className='contact__slider-1-txt'>Send Us a Message
                                Contact@HydraVTech.com</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <button className='button__prev' onClick={handlePrev}>
                    <img src={sliderright} alt="" />
                </button>
            </div>

        </section>

    )
}

export default Contact