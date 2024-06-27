import './barco.css';
import { InfoBarco} from '../InfoBarco/Informacion'
import barcosData from '../../data/barco.json';
import { useState } from 'react';

export function Barco() {

  const [barcoSeleccionado, setBarcoSeleccionado] = useState(null);

  const mostrarInfoBarco = (id) => {
    setBarcoSeleccionado(id);
  }

  return (



    <>
    <section className="container">
      <div className="row">
        <div className="col-md-12">
        <h1  style={{ textAlign: 'left' }} className='titulo'>Nuestra Flota</h1>
        </div>
      </div>

    </section>  

    <section className="container">   
      <div className="separador">
        <button onClick={() => mostrarInfoBarco(1)}>{barcosData.find(b => b.id_barco === 1).nombre}</button>
      </div>
      <div className="separador">
        <button onClick={() => mostrarInfoBarco(2)}>{barcosData.find(b => b.id_barco === 2).nombre}</button>
      </div>
      <div className="separador">
        <button onClick={() => mostrarInfoBarco(3)}>{barcosData.find(b => b.id_barco === 3).nombre}</button>
      </div>
      <div className="separador">
        <button onClick={() => mostrarInfoBarco(4)}>{barcosData.find(b => b.id_barco === 4).nombre}</button>
      </div>

    </section>

    <section className="container">
        {barcoSeleccionado && <InfoBarco id={barcoSeleccionado} />}
      </section>


      <section className="container radar">
        <div className="loader">
          <span></span>
            <div id="dot-1" className="dot"></div>
            <div id="dot-2" className="dot"></div>
            <div id="dot-3" className="dot"></div>
            <div id="dot-4" className="dot"></div>
            <div id="dot-5" className="dot"></div>
        </div>

      </section>


    </>
  );
}