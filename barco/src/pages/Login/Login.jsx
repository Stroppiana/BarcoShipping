import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if(response.ok){

        const data = await response.json();
        const { token, user } = data;

        localStorage.setItem('token', token);
        localStorage.setItem('usuarioActual', JSON.stringify(user));

        alert(`Bienvenido!!!`);
        setEmail('');
        setPassword('');
        navigate('/');
      }else{
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }

    }catch(error){
      console.error('Error inicio de sesion usuario', error);
      alert('Error inicio de sesion usuario');
    }

  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={login}>
          <p className="form-title">Iniciar sesión</p>
          <div className="input-container">
            <input type="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Ingrese su clave" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="submit">
            Iniciar Sesión
          </button>
          <p className="signup-link">
            ¿No tiene cuenta?
            <Link className="nav-link" to="/register">Registrarse</Link>
          </p>
        </form>
      </div>
    </>
  );
}