import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import arrowsleft from '../../assets/arrowsleft.png'
import arrowsright from '../../assets/arrowsright.png'
import rightArrow from '../../assets/shape.png'
import stages from '../../assets/stages.svg'
import './stages.scss'
function Stages() {
    const SlideRef = useRef()

    const handelNext = () => {
        SlideRef.current.swiper.slideNext()
    }

    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev()
        console.log('clik')
    }
    return (
        <section>
            <div className='stages'>
                <div className='stages__item'>
                    <div className='stages__item-shadow'>
                        <div className='stages__item-bg'>
                            <h2 className='stages__item-bg-txt'>01</h2>
                        </div>
                    </div>
                    <div className='stages__item-info'>
                        <img className='stages__item-info-img' src={rightArrow} alt="" />
                        <h1 className='stages__item-info-title'>3D Conception & Design</h1>
                    </div>
                </div>

                <div className='stages__item'>
                    <div className='stages__item-shadow'>
                        <div className='stages__item-bg'>
                            <h2 className='stages__item-bg-txt'>02</h2>
                        </div>
                    </div>
                    <div className='stages__item-info'>
                        <img className='stages__item-info-img' src={rightArrow} alt="" />
                        <h1 className='stages__item-info-title'>Interaction Design</h1>
                    </div>
                </div>

                <div className='stages__item'>
                    <div className='stages__item-shadow'>
                        <div className='stages__item-bg'>
                            <h2 className='stages__item-bg-txt'>03</h2>
                        </div>
                    </div>
                    <div className='stages__item-info'>
                        <img className='stages__item-info-img' src={rightArrow} alt="" />
                        <h1 className='stages__item-info-title'>VR World User Testing</h1>
                    </div>
                </div>

                <div className='stages__item'>
                    <div className='stages__item-shadow'>
                        <div className='stages__item-bg'>
                            <h2 className='stages__item-bg-txt'>04</h2>
                        </div>
                    </div>
                    <div className='stages__item-info'>
                        <img className='stages__item-info-img' src={rightArrow} alt="" />
                        <h1 className='stages__item-info-title'>Hydra VR Deploy</h1>
                    </div>
                </div>
                <img className='stages__bg' src={stages} alt="" />
            </div>
            <div className='stages__slider'>
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
                        <div className='stages__item'>
                            <div className='stages__item-shadow'>
                                <div className='stages__item-bg'>
                                    <h2 className='stages__item-bg-txt'>01</h2>
                                </div>
                            </div>
                            <div className='stages__item-info'>
                                <img className='stages__item-info-img' src={rightArrow} alt="" />
                                <h1 className='stages__item-info-title'>3D Conception & Design</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='stages__item'>
                            <div className='stages__item-shadow'>
                                <div className='stages__item-bg'>
                                    <h2 className='stages__item-bg-txt'>02</h2>
                                </div>
                            </div>
                            <div className='stages__item-info'>
                                <img className='stages__item-info-img' src={rightArrow} alt="" />
                                <h1 className='stages__item-info-title'>Interaction Design</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='stages__item'>
                            <div className='stages__item-shadow'>
                                <div className='stages__item-bg'>
                                    <h2 className='stages__item-bg-txt'>03</h2>
                                </div>
                            </div>
                            <div className='stages__item-info'>
                                <img className='stages__item-info-img' src={rightArrow} alt="" />
                                <h1 className='stages__item-info-title'>VR World User Testing</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='stages__item'>
                            <div className='stages__item-shadow'>
                                <div className='stages__item-bg'>
                                    <h2 className='stages__item-bg-txt'>04</h2>
                                </div>
                            </div>
                            <div className='stages__item-info'>
                                <img className='stages__item-info-img' src={rightArrow} alt="" />
                                <h1 className='stages__item-info-title'>Hydra VR Deploy</h1>
                            </div>
                        </div>
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

export default Stages