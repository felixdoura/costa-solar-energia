import React from 'react'
import '../App.css'
import './BannerPresentacion.css'

function BannerPresentacion() {
    return (
        <>
            <section className='banner-container'>
                <div className='banner-divisor-top'></div>
                <div className='banner-wrapper'>
                    <img src='../images/logo-02.jpg' alt='imagen-banner' className='image-presentacion' />
                    <ul className='banner-list'>
                        <li>Soluciones Energeticas</li>
                        <li>Profesionalismo</li>
                        <li>Experiencia</li>
                        <li>Responsabilidad Social</li>
                    </ul>
                    <div className='banner-divisor-list'></div>
                    <ul className='banner-list'>
                        <li>Hogares</li>
                        <li>Empresas</li>
                        <li>Industrias</li>
                        <li>Agro</li>
                    </ul>
                </div>
                <div className='banner-divisor-bottom'></div>
            </section>


        </>
    )
}

export default BannerPresentacion