import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
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