import React from "react";
import '../../App.css';
import './Products.css';
import CardItem from "../CardItem";
import Footer from "../Footer";

function Products() {
    return (
        <>
            <div className="products">
                <h1 className="products-title">Nuestros Productos</h1>
                <p className="products-info">A continuacion usted va a poder encontrar una variedad de productos y servicios que tenemos para ofrecer.</p>
            </div>
            <div className='products__cards__container'>
                <div className='products__cards__wrapper'>
                    <div className="products__cards">
                        <div className="products-card-detail">
                            <CardItem
                                src="images/termotanques-001.jpg"
                                text="Termotanques"
                                label='Termotanques'
                                path='/termotanques'
                            />
                        </div>
                        <p className="products-detail">Diseñado para calentar el agua sanitaria con los rayos solares, compuestos por una parte captadora del calor (tubos de vacio o placa plana) y un tanque acumulador donde se almacenará para ser utilizado posteriormente, con un ahorro promedio del 80% anual. Sean en gas o electricidad.</p>
                    </div>
                    <div className="products__cards">
                        <div className="products-card-detail">
                            <CardItem
                                src="images/fotovoltaicos-001.jpg"
                                text="Fotovoltaicos"
                                label='Generadores'
                                path='/products'
                            />
                        </div>
                        <p className="products-detail">Diseñado para calentar el agua sanitaria con los rayos solares, compuestos por una parte captadora del calor (tubos de vacio o placa plana) y un tanque acumulador donde se almacenará para ser utilizado posteriormente, con un ahorro promedio del 80% anual. Sean en gas o electricidad.o</p>
                    </div>
                    <div className="products__cards">
                        <div className="products-card-detail">
                            <CardItem
                                src="images/foto-insta-002.jpg"
                                text="Bombas de Agua Solares"
                                label='Servicio'
                                path='/services'
                            />
                        </div>
                        <p className="products-detail">diseñadas para remplazar los viejos molinos de viento y así poder pdoer acceder al bombe de agua en lugares remotos, ideal para usos en campos donde no llega la red. Y asi utilizarse en riegos o hidratación de ganado</p>
                    </div>
                    <div className="products__cards">
                        <div className="products-card-detail">
                            <CardItem
                                src="images/foto-insta-001.jpg"
                                text="Luminarias"
                                label='Ofertas'
                                path='/services'
                            />
                        </div>
                        <p className="products-detail">Iluminación autónoma, cuenta con panel solar y batería incluida en un mismo dispositivo, no requiere de cableado ni de romper parades</p>
                    </div>
                    <div className="products__cards">
                        <div className="products-card-detail">
                            <CardItem
                                src="images/climatizadores-001.jpg"
                                text="Climatizadores"
                                label='Ofertas'
                                path='/services'
                            />
                        </div>
                        <p className="products-detail">Estos agregan grados de temperatura a tu pileta y te permiten templar el agua para extender el uso y disfrutarla durante mas meses en el año.</p>
                    </div>
                    <div className="products__cards">
                        <div className="products-card-detail">
                            <CardItem
                                src="images/foto-insta-003.jpg"
                                text="Bombas de Calor"
                                label='Eventos'
                                path='/services'
                            />
                        </div>
                        <p className="products-detail">Utilizando el principio de la energia aerotermia, las bombas de calor aprovechan el calor del ambiente para transferirlo al agua. Estos equipos solo consumen un 30% de la energía entregada</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products