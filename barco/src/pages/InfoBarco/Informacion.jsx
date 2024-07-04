import './info.css';
import barcosData from '../../data/barco.json';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export function InfoBarco({ id }) {
  const [barco, setBarco] = useState(null);

  useEffect(() => {
    const barcoEncontrado = barcosData.find(barco => barco.id_barco === id);
    setBarco(barcoEncontrado);
  }, [id]);

  if (!barco) {
    return <div className="container">Barco no encontrado</div>;
  }

  return (
    <div className='contenedorFondo'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="titulo">{barco.nombre}</h1>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={barco.imagen} alt="barco" />
          </div>
          <div className="col-md-6">
            <p className='descripcion'>{barco.descripcion}</p>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Especificación</th>
              <th scope="col">Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Capacidad</td>
              <td>100,000 toneladas</td>
            </tr>
            <tr>
              <td>Longitud</td>
              <td>250 metros</td>
            </tr>
            <tr>
              <td>Calado</td>
              <td>15 metros</td>
            </tr>
            <tr>
              <td>Motor</td>
              <td>Motor diésel de 30,000 HP</td>
            </tr>
            <tr>
              <td>Velocidad Máxima</td>
              <td>25 nudos</td>
            </tr>
            <tr>
              <td>Año de Construcción</td>
              <td>2015</td>
            </tr>
            <tr>
              <td>Bandera</td>
              <td>Argentina</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  
}

InfoBarco.propTypes = {
  id: PropTypes.number.isRequired,
};
