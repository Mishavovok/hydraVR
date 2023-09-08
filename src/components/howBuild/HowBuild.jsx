import React from 'react'
import longArrow from '../../assets/longArrow.png'
import './howBuild.scss'

function HowBuild() {
    return (
        <section className='hoebuild'>
            <div className='hoebuild__info'>
                <div className='hoebuild__info-item'>
                    <h1 className='hoebuild__info-item-title'>HOW WE BUILD
                        <span className='hoebuild__info-item-title-size'> WITH HYDRA VR?</span></h1>
                    <img className='hoebuild__info-item-img' src={longArrow} alt="" />
                </div>
                <div className='hoebuild__info-item'>
                    <p className='hoebuild__info-item-text'>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HowBuild