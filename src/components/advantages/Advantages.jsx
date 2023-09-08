import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import arrowsleft from '../../assets/arrowsleft.png'
import arrowsright from '../../assets/arrowsright.png'
import longArrow from '../../assets/longArrow.png'
import simulation from '../../assets/simulation.png'
import salfCare from '../../assets/salfCare.png'
import outdoor from '../../assets/outdoor.png'
import education from '../../assets/education.png'
import advantages from '../../assets/advantages.svg'
import './advantages.scss'
function Advantages() {
    const SlideRef = useRef()

    const handelNext = () => {
        SlideRef.current.swiper.slideNext()
    }

    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev()
        console.log('clik')
    }
    return (
        <section className='advantages'>
            <div className='advantages__info'>
                <div className='advantages__info-item'>
                    <h1 className='advantages__info-item-title'>WHY BUILD
                        <span className='advantages__info-item-title-size'> WITH HYDRA?</span></h1>
                    <img className='advantages__info-item-img' src={longArrow} alt="" />
                </div>
                <div className='advantages__info-item'>
                    <p className='advantages__info-item-text'>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>
            <div className='advantages__card'>
                <div className="advantages__card-item">
                    <img className='advantages__card-item-img' src={simulation} alt="" />
                    <h1 className='advantages__card-item-title'>SIMULATION</h1>
                    <p className='advantages__card-item-text'>Vitae sapien pellentesque habitant morbi
                        nunc. Viverra aliquet  porttitor rhoncus
                        libero justo laoreet sit amet vitae.
                    </p>
                    <button className='advantages__card-item-btn'>TRY IT NOW</button>
                </div>
                <div className="advantages__card-item">
                    <img className='advantages__card-item-img' src={education} alt="" />
                    <h1 className='advantages__card-item-title'>EDUCATION</h1>
                    <p className='advantages__card-item-text'>Vitae sapien pellentesque habitant morbi
                        nunc. Viverra aliquet  porttitor rhoncus
                        libero justo laoreet sit amet vitae.
                    </p>
                    <button className='advantages__card-item-btn'>TRY IT NOW</button>
                </div>
                <div className="advantages__card-item">
                    <img className='advantages__card-item-img' src={salfCare} alt="" />
                    <h1 className='advantages__card-item-title'>SELF-CARE</h1>
                    <p className='advantages__card-item-text'>Vitae sapien pellentesque habitant morbi
                        nunc. Viverra aliquet  porttitor rhoncus
                        libero justo laoreet sit amet vitae.
                    </p>
                    <button className='advantages__card-item-btn'>TRY IT NOW</button>
                </div>
                <div className="advantages__card-item">
                    <img className='advantages__card-item-img' src={outdoor} alt="" />
                    <h1 className='advantages__card-item-title'>OUTDOOR</h1>
                    <p className='advantages__card-item-text'>Vitae sapien pellentesque habitant morbi
                        nunc. Viverra aliquet  porttitor rhoncus
                        libero justo laoreet sit amet vitae.
                    </p>
                    <button className='advantages__card-item-btn'>TRY IT NOW</button>
                </div>
            </div>

            <div className='advantages__slider'>
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
                        <div className='slider__item'>
                            <img className='slider__item-img' src={simulation} alt="" />
                            <h1 className='slider__item-title'>SIMULATION</h1>
                            <p className='slider__item-text'>Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button className='slider__item-btn'>TRY IT NOW</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider__item'>
                            <img className='slider__item-img' src={education} alt="" />
                            <h1 className='slider__item-title'>EDUCATION</h1>
                            <p className='slider__item-text'>Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button className='slider__item-btn'>TRY IT NOW</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider__item'>
                            <img className='slider__item-img' src={salfCare} alt="" />
                            <h1 className='slider__item-title'>SELF-CARE</h1>
                            <p className='slider__item-text'>Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button className='slider__item-btn'>TRY IT NOW</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider__item'>
                            <img className='slider__item-img' src={outdoor} alt="" />
                            <h1 className='slider__item-title'>OUTDOOR</h1>
                            <p className='slider__item-text'>Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button className='slider__item-btn'>TRY IT NOW</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='slider__button'>
                    <button className='button__prev' onClick={handlePrev}>
                        <img src={arrowsright} alt="" />
                    </button>
                </div>

            </div>
            <img className='advantages__bg' src={advantages} alt="" />
        </section>
    )
}

export default Advantages