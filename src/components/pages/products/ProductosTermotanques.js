import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import CardItem from '../../CardItem';
import '../../Cards.css';
import './ProductosTermotanques.css';

function ProductosTermotanques() {
    return (
        <>
        <div className='termotanques'>
            <h1 className='title-termotanques'>Termotanques</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem
                            src="images/foto-insta-012.jpg"
                            text="Que es un Termotanque Solar"
                            label='Termotanques'
                            path='/termotanques'
                        />
                    </ul>
                    <p className='product-info'>
                        Un termotanque de energía solar es un sistema que utiliza la radiación solar para calentar agua y proporcionar agua caliente en un hogar o edificio. Está compuesto por paneles solares, un tanque de almacenamiento y un sistema de circulación de agua. <br />

                        <br />
                        En primer lugar, los paneles solares capturan la energía solar y la convierten en calor. Estos paneles generalmente están compuestos por tubos de vidrio con un revestimiento absorbente y se colocan en un área expuesta al sol. A medida que los rayos solares golpean los paneles, se produce un calentamiento del líquido (generalmente una mezcla de agua y glicol) que circula dentro de los tubos. <br />

                        <br />
                        Luego, el líquido caliente se bombea hacia el tanque de almacenamiento, donde transfiere su calor al agua que se encuentra dentro del tanque. Esta agua caliente se puede utilizar directamente en las actividades diarias, como ducharse o lavar platos. Además, el termotanque también puede contar con un sistema de respaldo, como un calentador de gas o eléctrico, para proporcionar agua caliente en caso de que la energía solar no sea suficiente. <br />

                        <br />
                        En resumen, un termotanque de energía solar aprovecha la radiación solar para calentar agua a través de paneles solares y almacenarla en un tanque. Es una forma eficiente y sostenible de obtener agua caliente, reduciendo la dependencia de fuentes de energía no renovables y disminuyendo las emisiones de carbono."
                    </p>
                </div>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductosTermotanques