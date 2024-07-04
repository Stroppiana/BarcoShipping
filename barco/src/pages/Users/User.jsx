import { useState, useEffect } from 'react';


export function User(){


  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Obtenemos los usuarios del localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    setUsuarios(usuariosGuardados);
  }, []);

    return(
        <>
        
        <div className="container">
        <table>
          <thead>
            <tr>
              <th>ID USUARIO</th>
              <th>USUARIO</th>
              <th>EMAIL</th>
              <th>ROL</th>
            </tr>
          </thead>
        
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index}>
                <td>{usuario.id_user}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rol}</td>
              </tr>
            ))}
          </tbody>
         
        </table>
      </div>
        </>
    );


}