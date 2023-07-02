import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import CardItem from '../../CardItem';
import '../../Cards.css';
import './Productos.css';

function ProductosClimatizadores() {
  return (
    <>
      <div className='climatizadores'>
        <h1 className='title-climatizadores'>Climatizadores Solares</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__item'>
              <CardItem
                src="images/climatizadores-001.jpg"
                text="Que es un Climatizador de piscina solar"
                label='Climatizadores'
                path='/climatizadores'
              />
            </ul>
            <p className='product-info'>

              Un climatizador de piscina solar es un dispositivo que utiliza la energía solar para calentar el agua de una piscina y mantenerla a una temperatura agradable. Este sistema aprovecha la radiación solar para aumentar la temperatura del agua, lo que permite alargar la temporada de uso de la piscina y ahorrar en costos de calefacción convencional. <br />

              <br />
              El climatizador de piscina solar consta principalmente de paneles solares y un sistema de circulación de agua. Los paneles solares capturan la energía solar y la utilizan para calentar un fluido (generalmente agua o una mezcla de agua y glicol) que circula a través de ellos. A medida que el líquido se calienta, se dirige hacia la piscina a través de un circuito de tuberías. <br />

              <br />
              El agua de la piscina circula a través de estos tubos, entrando en contacto con el fluido que se calienta mediante los paneles solares. A medida que el agua fluye, absorbe el calor del fluido y regresa a la piscina a una temperatura más alta. Este proceso de intercambio de calor se repite continuamente, elevando gradualmente la temperatura del agua de la piscina. <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductosClimatizadores