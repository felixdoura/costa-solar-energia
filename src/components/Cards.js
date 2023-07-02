import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>QUIENES SOMOS Y QUE HACEMOS</h1>
        <p className='brief'>Costa Solar es una empresa enfocada en energias renovables ubicada en Santa Teresita, Provincia de Buenos Aires. Nuestro enfoque se centra en brindar soluciones de energía sostenible y eficiente a nuestros clientes. Ofrecemos instalaciones de alta calidad, utilizando tecnología de vanguardia y equipos confiables. Además de reducir la dependencia de la red eléctrica convencional, nuestros productos permiten a los usuarios ahorrar dinero a largo plazo y contribuir a la preservación del medio ambiente mediante la adopción de energías limpias y renovables.</p>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                    <CardItem 
                        src="images/termotanques-001.jpg"
                        text="Termotanques"
                        label='Termotanques'
                        path='/termotanques'
                    />
                    <CardItem 
                        src="images/fotovoltaicos-001.jpg"
                        text="Fotovoltaicos"
                        label='Generadores'
                        path='/fotovoltaicos'
                    />
                    <CardItem 
                        src="images/foto-insta-001.jpg"
                        text="Luminarias"
                        label='Luminarias'
                        path='/services'
                    />
                </ul>
                <ul className='cards__item'>
                    <CardItem 
                        src="images/climatizadores-001.jpg"
                        text="Climatizadores"
                        label='Climatizadores'
                        path='/climatizadores'
                    />
                    <CardItem 
                        src="images/foto-insta-002.jpg"
                        text="Bombas de Agua"
                        label='Bombeo'
                        path='/services'
                    />
                    <CardItem 
                        src="images/foto-insta-003.jpg"
                        text="Bombas de Calor"
                        label='Bombeo'
                        path='/bombas-de-calor'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards