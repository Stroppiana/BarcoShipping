import { Link } from "react-router-dom";

import './home.css';

export function Home(){
    return(

      <>
      <section className="container contenedorFondo">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
                <img src="../../../public/assets/img/banner.jpg" alt="Banner" className="img-fluid"/>
            </div>
            <div className="col-md-12">
                <h1 className="titulo">La Empresa</h1>
                <h2 className="subtitulo">Invertimos en el país porque tenemos firmes convicciones</h2>
                <p><strong>Bar.Co Shipping</strong> es una empresa argentina dedicada exclusivamente al transporte de hidrocarburos. Radicada en la ciudad de Buenos Aires, cuenta con una importante estructura para brindar un servicio acorde con los más altos estándares internacionales. Así, cumplimos con una importante parte del suministro de productos de nuestro país.
                </p>
            </div>
        </div>
      </div>
  

      </section>

    
      <section className="container">
      <button className="separador btn btn-dark">
              <Link to={"/barcos"}>
              <span>Embarcacion</span>
              </Link>
      </button>
      <button className="separador btn btn-dark" >
              <Link to={"/envios"}>
              <span>Realizar envio</span>
              </Link>
        </button>
      </section>
      
    
      </>
      
    );
}
