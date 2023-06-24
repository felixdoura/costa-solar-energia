import React from "react";
import '../../App.css';
import CardItem from "../CardItem";
import Footer from "../Footer";

function Products() {
    return (
        <>
            <div className="products">
                <h1 className="products-title">Nuestros Productos</h1>
                <p className="products-info">A continuacion usted va a poder encontrar una variedad de productos y servicios que tenemos para ofrecer.</p>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem
                            src="images/foto-insta-012.jpg"
                            text="Termotanques"
                            label='Termotanques'
                            path='/products'
                        />
                        <CardItem
                            src="images/foto-insta-004.jpg"
                            text="Fotovoltaicos"
                            label='Generadores'
                            path='/products'
                        />
                        <CardItem
                            src="images/foto-insta-001.jpg"
                            text="Luminarias"
                            label='Ofertas'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem
                            src="images/foto-insta-001.jpg"
                            text="Climatizadores"
                            label='Ofertas'
                            path='/services'
                        />
                        <CardItem
                            src="images/foto-insta-002.jpg"
                            text="Bombas de Agua"
                            label='Servicio'
                            path='/services'
                        />
                        <CardItem
                            src="images/foto-insta-003.jpg"
                            text="Bombas de Calor"
                            label='Eventos'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products