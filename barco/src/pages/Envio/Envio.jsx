import './envio.css';
import barcosData from '../../data/barco.json';
import { useState, useEffect } from 'react';

export function Envio() {
  const [cargamento, setCargamento] = useState('');
  const [peso, setPeso] = useState('');
  const [barco, setBarco] = useState('');
  const [puertoOrigen, setPuertoOrigen] = useState('');
  const [puertoDestino, setPuertoDestino] = useState('');
  const [envios, setEnvios] = useState([]);
  const [costo, setCosto] = useState(0);
  const [usuario, setUsuario] = useState(null); 


  useEffect(() => {

    const user = JSON.parse(localStorage.getItem('usuarioActual'));

    setUsuario(user);

    const storedEnvios = JSON.parse(localStorage.getItem('envios')) || [];
    setEnvios(storedEnvios);
  }, []);

  useEffect(() => {
    if (peso && barco && puertoOrigen && puertoDestino) {
      calcularCosto();
    }
  },);


  function calcularCosto() {
    const tarifaPeso = 50; 
    const tarifaBarco = 50; 
    const tarifaDistancia = 10; 

    const costoTotal = (peso * tarifaPeso) + tarifaBarco + tarifaDistancia;
    setCosto(costoTotal);
  }


  function hacerEnvio(e) {
    e.preventDefault();

    if (!usuario) {
      alert('Debe iniciar sesión para realizar un envío');
      return;
    }

    if (!cargamento || !peso || !barco || !puertoOrigen || !puertoDestino) {
      alert('Todos los campos son obligatorios');
      return;
    }    

    const envio = {
      id_envio: envios.length + 1,
      cargamento: cargamento,
      peso: peso,
      barco: barco,
      origen: puertoOrigen,
      destino: puertoDestino,
      id_usuario: usuario ? usuario.id_user : null,
      costo: costo
    };

    const nuevosEnvios = [...envios, envio];
    setEnvios(nuevosEnvios);
    localStorage.setItem('envios', JSON.stringify(nuevosEnvios));

    console.log(envio);

    setCargamento('');
    setPeso('');
    setBarco('');
    setPuertoOrigen('');
    setPuertoDestino('');
    setCosto(0);

  }

   const enviosFiltrados = envios.filter(envio => envio.id_usuario === usuario?.id_user);

  return (
    <>
    <section className="container">
    <h2>Bienvenido {usuario ? usuario.nombre : 'Invitado'}</h2>
    </section>
      <section className="container">
       
        <form className="form containerFormulario" id="form" onSubmit={hacerEnvio}>
          <div className="input-box">
            <label>Tipo carga</label>
            <input placeholder="Cargamento" type="text" id="cargamento" value={cargamento}
              onChange={(e) => setCargamento(e.target.value)}/>
          </div>
          <div className="input-box">
            <label>Peso</label>
            <input placeholder="Peso" type="number" id="peso" value={peso}
              onChange={(e) => setPeso(e.target.value)}/>
          </div>
          <div className="select-box">
            <select id="barco" value={barco} onChange={(e) => setBarco(e.target.value)}>
              <option hidden="">Seleccionar Barco</option>
              {barcosData.map(barco => (
                <option key={barco.id_barco} value={barco.nombre}>{barco.nombre}</option>
              ))}
            </select>
          </div>
          <div className="column">
            <div className="select-box">
              <select id="puertoOrigen" value={puertoOrigen} onChange={(e) => setPuertoOrigen(e.target.value)}>
                <option hidden="">Puerto Origen</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Mar del Plata">Mar del Plata</option>
                <option value="Bahia Blanca">Bahia Blanca</option>
                <option value="Tierra del Fuego">Tierra del Fuego</option>
              </select>
            </div>
            <div className="select-box">
              <select id="puertoDestino" value={puertoDestino} onChange={(e) => setPuertoDestino(e.target.value)}>
                <option hidden="">Puerto Destino</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Mar del Plata">Mar del Plata</option>
                <option value="Bahia Blanca">Bahia Blanca</option>
                <option value="Tierra del Fuego">Tierra del Fuego</option>
              </select>
            </div>
          </div>
          <button id="solicitarEnvio">Solicitar Envio</button>
          <section className="container">
        {usuario?.rol === 'user' && (
          <div>
            <p>Costo del Envío: ${costo}</p>
          </div>
        )}
      </section>
        </form>
      </section>
           
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>ID USUARIO</th>
              <th>ID ENVIO</th>
              <th>PRODUCTO</th>
              <th>BARCO</th>
              <th>ID BARCO</th>
              <th>PUERTO ORIGEN</th>
              <th>PUERTO DESTINO</th>
              <th>COSTO</th>
            </tr>
          </thead>
          {usuario?.rol === 'user' && (
          <tbody id="envios">
            {enviosFiltrados.map((envio, index) => (
              <tr key={index}>
                <td>{envio.id_usuario || '?'}</td>
                <td>{index + 1}</td>
                <td>{envio.cargamento}</td>
                <td>{envio.barco}</td>
                <td>{barcosData.find(b => b.nombre === envio.barco)?.id_barco}</td>
                <td>{envio.origen}</td>
                <td>{envio.destino}</td>
                <td>${envio.costo}</td>
              </tr>
            ))}
          </tbody>
          )}

        {usuario?.rol === 'admin' && (

          <tbody id="envios">
            {envios.map((envio, index) => (
              <tr key={index}>
                <td>{envio.id_usuario || '?'}</td>
                <td>{index + 1}</td>
                <td>{envio.cargamento}</td>
                <td>{envio.barco}</td>
                <td>{barcosData.find(b => b.nombre === envio.barco)?.id_barco}</td>
                <td>{envio.origen}</td>
                <td>{envio.destino}</td>
                <td>${envio.costo}</td>
              </tr>
            ))}
          </tbody>
        )}
        </table>
      </div>
    </>
  );
}
