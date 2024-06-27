import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    let usuarioEncontrado = null;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarioEncontrado = usuarios.find(user => user.email === email && user.rol === 'user');

    if (!usuarioEncontrado) {
      const admin = JSON.parse(localStorage.getItem('admin'));
      if (admin && admin.email === email && admin.rol === 'admin') {
        usuarioEncontrado = admin;
        localStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));
      }
    } else {
      localStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));
    }

    if (usuarioEncontrado && usuarioEncontrado.password === password) {
      alert(`Bienvenido, ${usuarioEncontrado.nombre}!`);
      navigate('/');
    } else {
      alert('Email o contraseña incorrectos');
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
