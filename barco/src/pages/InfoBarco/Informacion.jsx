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
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="titulo">{barco.nombre}</h1>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={barco.imagen} alt="barco" />
        </div>
        <div className="col-md-6">
          <p>{barco.descripcion}</p>
        </div>
      </div>
    </div>
  );
}

InfoBarco.propTypes = {
  id: PropTypes.number.isRequired,
};
