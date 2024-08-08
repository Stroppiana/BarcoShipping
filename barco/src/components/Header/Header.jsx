import { Link } from 'react-router-dom';
import './header.css';
import { useState, useEffect } from 'react';

export function Header() {

  const [usuario, setUsuario] = useState(null); 
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('usuarioActual'));
    setUsuario(user);
  }, []); 

  return (

    <div id="app">
    <header className="d-flex justify-content-between align-items-center">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="nav-link" to={"/"}>
            <img
              src="assets/img/logo.png"
              alt="logo tienda"
              width="1100"
              height="1132"
              className="img-fluid rounded mx-auto d-block logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link botonUsuarios" to={"/"}>HOME</Link>
            </li>
              {usuario ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link botonUsuarios" to="/envios">ENVIO</Link>
                  </li>
                  {usuario?.rol === 'ADMIN' && (
                    <li className="nav-item">
                      <Link className="nav-link botonUsuarios" to="/user">USUARIOS</Link>
                    </li>
          
                  )}
                  <li className="nav-item">
                    <Link className="nav-link botonUsuarios" to="/logout"> LOG-OUT </Link>
                  </li>
                </>
                ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link botonUsuarios" to="/login">LOGIN</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link botonUsuarios" to="/register">REGISTER</Link>
                  </li>
                </>
                )}
            </ul>/
          </div>
        </div>
      </nav>
    </header>



  </div>

  );
}
