import { useState, useEffect } from 'react';


export function User(){

  const [usuarios, setUsuarios] = useState([]);
  //const token = localStorage.getItem('token'); 

  useEffect(() => {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    setUsuarios(usuariosGuardados);

    const fetchUsers = async () =>{
      try{
        const response = await fetch('http://localhost:5000/api/users',{
          method:'GET',
          headers:{
            'Content-Type': 'application/json',
           // 'Authorization': `Bearer ${token}`, 
          },
        });

        if(!response.ok){
          throw new Error('ERROR');
        }

        const datos = await response.json();

        setUsuarios(datos);

      }catch(error){
        console.error('Error al obtener usuarios', error);
      }
    }

    fetchUsers();

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
                <td>{usuario.id}</td>
                <td>{usuario.name}</td>
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