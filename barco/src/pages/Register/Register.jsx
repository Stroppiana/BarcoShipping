// import './register.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';


// export function Register(){

//   const [nombre, setNombre] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(false);
//   const [usuarios, setUsuarios] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {

//     const storedUsuarios= JSON.parse(localStorage.getItem('usuarios')) || [];
//     setUsuarios(storedUsuarios);
//   }, []);


//   let lastId = localStorage.getItem('lastUserId');
//   lastId = lastId ? parseInt(lastId) : 0;
//   const id_usuario = lastId + 1;

//   const registrarse = (e) => {
//     e.preventDefault();

//     if(nombre === "" || email === "" || password === ""){
//       setError(true)
//       return;
//     }

//     setError(false)

//     const usuario = {
//       id_user: id_usuario,
//       nombre: nombre,
//       email: email,
//       password: password,
//       rol: "user"
//     };

//     const nuevosUsuarios = [...usuarios, usuario];

//     setUsuarios(nuevosUsuarios);

//     localStorage.setItem('usuarios', JSON.stringify(nuevosUsuarios));
//     localStorage.setItem('lastUserId', id_usuario);

//     alert(`Hola ${nombre}, te has registrado exitosamente!`);

//     setEmail('');
//     setNombre('');
//     setPassword('');

//     navigate('/login');
   
//   }
  
//     return(
//         <>
//         <div className='container'>
            
//         <form className="form" onSubmit={registrarse}>
//            <p className="form-title">Registarse</p>
//             <div className="input-container">
//               <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
//               <span>
//               </span>
//           </div>
//            <div className="input-container">
//               <input type="email" placeholder="Ingrese su email" value={email} onChange={e => setEmail(e.target.value)}/>
//               <span>
//               </span>
//           </div>
//           <div className="input-container">
//               <input type="password" placeholder="Ingrese su clave" value={password} onChange={e => setPassword(e.target.value)}/>
//             </div>

//              <button className="submit">
//                 Registrarse  
//             </button>  
         
//           <p className="signup-link">
//             Tienes cuenta? 
//             <Link to="/login"> Log In</Link>
//           </p>
//         </form>
//         {error && <p> TODOS LOS CAMPOS SON OBLIGATORIOS</p>}

//         </div>
//         </>
//     );    
// }
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Register() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const registrarse = async (e) => {
        e.preventDefault();

        if (!nombre || !email || !password) {
            setError(true);
            return;
        }

        setError(false);

        const usuario = {
            name: nombre,
            email: email,
            password: password,
            rol: "user"
        };

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });

            if (response.ok) {
                alert(`Hola ${nombre}, te has registrado exitosamente!`);
                setEmail('');
                setNombre('');
                setPassword('');
                navigate('/login');
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Error al registrar usuario');
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            alert('Error al registrar usuario');
        }
    };

    return (
        <div className='container'>
            <form className="form" onSubmit={registrarse}>
                <p className="form-title">Registarse</p>
                <div className="input-container">
                    <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
                </div>
                <div className="input-container">
                    <input type="email" placeholder="Ingrese su email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Ingrese su clave" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button className="submit">Registrarse</button>
                <p className="signup-link">
                    Tienes cuenta? 
                    <Link to="/login"> Log In</Link>
                </p>
            </form>
            {error && <p>TODOS LOS CAMPOS SON OBLIGATORIOS</p>}
        </div>
    );
}
