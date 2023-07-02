import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import CardItem from '../../CardItem';
import '../../Cards.css';
import './Productos.css';

function ProductosFotovoltaicos() {
  return (
    <>
      <div className='fotovoltaicos'>
        <h1 className='title-fotovoltaicos'>Fotovoltaicos</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__item'>
              <CardItem
                src="images/fotovoltaicos-001.jpg"
                text="Que es un Generador Fotovoltaico"
                label='Fotovoltaicos'
                path='/fotovoltaicos'
              />
            </ul>
            <p className='product-info'>

              Un generador de energía fotovoltaico es un sistema que convierte la luz solar en electricidad utilizando paneles solares. Estos paneles están compuestos por celdas fotovoltaicas, que son dispositivos semiconductores capaces de generar corriente eléctrica cuando son expuestos a la radiación solar. <br />

              <br />
              En primer lugar, los paneles solares capturan la luz solar y la convierten en energía eléctrica. Cada celda fotovoltaica está compuesta por capas de materiales como silicio, que generan una corriente eléctrica cuando los fotones de la luz solar los golpean. <br />

              <br />
              Una vez convertida, la electricidad se distribuye a través del sistema eléctrico del hogar, alimentando los electrodomésticos y las cargas eléctricas de manera similar a la electricidad suministrada por la red eléctrica convencional. <br />

              <br />
              En resumen, un generador de energía fotovoltaico aprovecha la luz solar mediante paneles para alimentar los dispositivos eléctricos del hogar, reduciendo así la dependencia de la red eléctrica convencional y contribuyendo a la generación de energía limpia y sostenible.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductosFotovoltaicos