import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import arrowsleft from '../../assets/arrowsleft.png'
import arrowsright from '../../assets/arrowsright.png'
import used_1 from '../../assets/used-1.png'
import used_2 from '../../assets/used-2.png'
import used_3 from '../../assets/used-3.png'
import used_4 from '../../assets/used-4.png'
import './used.scss'
function Used() {
    const SlideRef = useRef()

    const handelNext = () => {
        SlideRef.current.swiper.slideNext()
    }

    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev()
        console.log('clik')
    }
    return (

        <section className='used'>
            <img className='used__img' src={used_1} alt="" />
            <img className='used__img' src={used_2} alt="" />
            <img className='used__img' src={used_3} alt="" />
            <img className='used__img' src={used_4} alt="" />
            <div className='used__slide'>
                <div className='slider__button'>
                    <button className='button__next' onClick={handelNext}>
                        <img src={arrowsleft} alt="" />
                    </button>
                </div>
                <Swiper
                    loop={true}
                    ref={SlideRef}
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={false}
                    modules={[Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <img className='used__slide-img' src={used_1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='used__slide-img' src={used_2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='used__slide-img' src={used_3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='used__slide-img' src={used_4} alt="" />
                    </SwiperSlide>
                </Swiper>
                <div className='slider__button'>
                    <button className='button__prev' onClick={handlePrev}>
                        <img src={arrowsright} alt="" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Used