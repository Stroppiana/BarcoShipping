import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('usuarioActual');
    navigate('/login');
  }, [navigate]);

  return null;
}
