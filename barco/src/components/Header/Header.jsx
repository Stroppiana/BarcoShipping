import { Link } from 'react-router-dom';
import './header.css';

export function Header() {
  
 const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));

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
              <div className="button-container">
                <button className="btn btn-outline-primary"><Link to={"/"}>
                  <svg
                    className="icon"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0        0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.       3h-96.1z"
                    ></path>
               </svg>
              </Link>
             </button>
             </div>

             </li>
              {usuarioActual ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/envios">Envio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">

<button className="Btn Btn-small">
  <div className="sign">
    <svg viewBox="0 0 512 512">
      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
    </svg>
  </div>
  <div className="text">Logout</div>
</button>

                    </Link>
                  </li>
                </>
                ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
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
