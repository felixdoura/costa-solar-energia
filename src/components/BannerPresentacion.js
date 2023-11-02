import React from 'react'
import '../App.css'
import './BannerPresentacion.css'

function BannerPresentacion() {
    return (
        <>
            <section className='banner-container'>
                <div className='banner-divisor-top'></div>
                <div className='banner-wrapper'>
                    <div>
                        <h3 className='banner-title'>Instalacion de Paneles Solares</h3>
                    </div>

                    <div className='items-wrapper'>
                        <div><img src='/resources/item-01.png' alt='item-img' /></div>
                        <div><img src='/resources/item-02.png' alt='item-img' /></div>
                        <div><img src='/resources/item-03.png' alt='item-img' /></div>
                    </div>
                </div>
                <div className='banner-divisor-bottom'></div>
            </section>


        </>
    )
}

export default BannerPresentacion