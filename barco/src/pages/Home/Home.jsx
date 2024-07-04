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
                <h1 className="titulo">Bar.Co Shipping</h1>
                <h2 className="subtitulo">Invertimos en el país porque tenemos firmes convicciones</h2>
<p>En Bar.Co Shipping, estamos profundamente comprometidos con el desarrollo y crecimiento de Argentina. Creemos que invertir en nuestro país no solo fortalece nuestra empresa, sino que también contribuye al bienestar y progreso de la sociedad en su conjunto. Nuestra empresa, con sede en la vibrante ciudad de Buenos Aires, se dedica exclusivamente al transporte de hidrocarburos, desempeñando un papel crucial en la cadena de suministro de energía del país.</p>

<p>Desde nuestra fundación, hemos construido una sólida infraestructura que nos permite ofrecer un servicio de transporte de hidrocarburos que cumple con los más altos estándares internacionales de calidad y seguridad. Cada uno de nuestros esfuerzos está orientado a garantizar que nuestros clientes reciban productos de manera eficiente y segura, apoyando así el suministro energético esencial para el desarrollo económico y social de Argentina.</p>

<p>Nuestro compromiso con la excelencia se refleja en nuestra inversión continua en tecnología de punta y capacitación de nuestro personal. Reconocemos la importancia de estar a la vanguardia de la industria para ofrecer un servicio confiable y sostenible. En Bar.Co Shipping, creemos firmemente en la capacidad de nuestro país para ser líder en el sector energético, y trabajamos incansablemente para hacer realidad esa visión.</p>

<p>Invertimos en Argentina porque confiamos en su potencial y en el de su gente. Cada proyecto y cada iniciativa que emprendemos están inspirados en la convicción de que, al contribuir al crecimiento del país, estamos también asegurando un futuro próspero para nuestra empresa y nuestros empleados. Nuestro compromiso con la Argentina es firme y constante, y estamos orgullosos de ser parte del motor que impulsa su progreso.</p>

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
