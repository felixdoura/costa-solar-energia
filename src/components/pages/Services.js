import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import './Services.css'

function Services() {
    return (
        <>
            <section>
                <div className='info-wrapper'>
                    <h1 className='title-services'>Nuestros Servicios</h1>
                    <p className='info-services'>Nuestros servicios incluyen asesoramiento personalizado, instalación profesional, mantenimiento regular, monitoreo del sistema y soporte al cliente. Estos servicios están diseñados para garantizar que tu sistema solar funcione de manera óptima y te brinde los beneficios esperados en términos de ahorro de energía y reducción de la huella de carbono.</p>
                </div>
                <div className='info-wrapper'>
                    <div className='services-wrapper'>

                        <div className='services-item'>
                            <img src='../../images/colocacion-001.jpg' alt='colocacion' className='imagen-colocacion' />
                            <div className='info-colocacion'>
                                <h4 className='title-colocacion'>Colocacion</h4>
                                <p className='description-colocacion'> La instalación de los paneles solares implica fijar los paneles de manera segura utilizando soportes y estructuras adecuadas. También se conectarán los paneles entre sí y se instalarán los cables de conexión.</p>
                            </div>
                        </div>

                        <div className='services-item'>
                            <img src='../../images/instalacion-002.jpg' alt='colocacion' className='imagen-colocacion' />
                            <div className='info-colocacion'>
                                <h4 className='title-colocacion'>Instalacion Electrica</h4>
                                <p className='description-colocacion'> Cuando el sistema esté completamente instalado, se llevará a cabo una inspección final para asegurarse de que todo funcione correctamente y cumpla con los estándares de seguridad. Luego, el sistema solar se pondrá en marcha y podrás comenzar a aprovechar la energía solar para alimentar tu hogar.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Services