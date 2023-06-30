import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import './Nosotros.css'

function Nosotros() {
    return (
        <>
            <section>
                <div className='info-wrapper'>
                    <h1 className='title-nosotros'>Quienes Somos</h1>
                    <p className='info-nosotros'>Somos una empresa costera que brinda soluciones energéticas, utilizando las energías renovables. Nos decidamos al cálculo, asesoramiento, venta, instalación y puesta en marchar de los equipos.
                        Nuestro objetivo es lograr un mundo más limpio y sustentable, para una mejor calidad de vida.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Nosotros