import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import CardItem from '../../CardItem';
import './Productos.css';
import '../../Cards.css';
import { BsWhatsapp } from 'react-icons/bs';

function ProductosTermotanques() {
    return (
        <>
            <div className='termotanques'>
                <h1 className='title-termotanques'>Termotanques Solares</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <h3 className='product-info'>Son equipos diseñados para lograr captar la energia solar termica y calentar el agua a traves de tubos de vacio para posteriormente ser acumulada. <br />
                            Con este sistema se puede ahorrar un 80% del consumo convencional.
                        </h3>
                        <ul className='cards__item'>
                            <CardItem
                                src="images/termotanques-001.jpg"
                                text="Termotanque Solar"
                                label='Termotanques'
                                path='/termotanques'
                            />
                        </ul>
                    </div>
                    <div className='tarjetas-termotanques'>
                        <div className='card-termotanques'>
                            <h3>Capacidad</h3>
                            <ul>
                                <li>100 litros - 2/3 Personas</li>
                                <li>150 litros - 2/3 Personas</li>
                                <li>200 litros - 2/3 Personas</li>
                                <li>250 litros - 2/3 Personas</li>
                                <li>300 litros - 2/3 Personas</li>
                            </ul>
                        </div>
                        <div className='card-termotanques'>
                            <h3>Material</h3>
                            <ul>
                                <li>Epoxy</li>
                                <li>Galvanizado</li>
                                <li>Inoxidable</li>
                            </ul>
                        </div>
                        <div className='card-termotanques'>
                            <h3>Funcionamiento</h3>
                            <ul>
                                <li>Termosifonicos</li>
                                <li>Presurizables</li>
                                <li>Heat Pipe</li>
                            </ul>
                        </div>
                    </div>
                    <div className='tarjeta-accesorios'>
                        <div className='card-accesorios'>
                            <div className='items-accesorios'>
                                <h3>Accesorios</h3>
                                <ul>
                                    <li>Llave 3 vias termostaticas</li>
                                    <li>Controlador</li>
                                    <li>Resistencia</li>
                                    <li>Termostato</li>
                                    <li>Barra de Magnesio</li>
                                </ul>
                            </div>
                            <img src='../images/logo-01.jpeg' alt='termotanque-pic' className='image-accesorios' />
                        </div>
                    </div>
                    <div className='tarjetas-termotanques'>
                        <div className='card-termotanques'>
                            <h3 className='title-presupuesto'>Pedir Presupuesto</h3>
                            <a
                                href='https://api.whatsapp.com/send?phone=5492246535844'
                                className='btns whatsapp-link'
                                buttonStyle='btn--primary'
                                buttonSize='btn--large'
                            // onClick={console.log('hey')}
                            >
                                WHATSAPP <BsWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductosTermotanques