import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Barco } from "./pages/Barco/Barco";
import { Envio } from "./pages/Envio/Envio";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Logout } from "./pages/Logout/Logout";
import { Admin } from './data/Admin';
import { User } from './pages/Users/User';
import { BrowserRouter ,Routes, Route } from "react-router-dom";

import '../public/assets/css/estilos.css'
import '../public/assets/lib/bootstrap/css/bootstrap.min.css'


function App() {

  Admin();

  const routes = [
    {
      path:"/",
      element: <Home/>,
      name: "Home",
    }, 
    {
      path:"/barcos",
      element: <Barco />,
      name: "Barco",
    },
    {
      path:"/envios",
      element: <Envio />,
      name: "Envio",
    },
    {
      path:"/login",
      element: <Login />,
      name: "Login",
    },
    {
      path:"/register",
      element: <Register />,
      name: "Register",
    },
    {
      path:"/logout",
      element: <Logout />,
      name: "Logout",
    },
    {
      path:"/user",
      element: <User />,
      name: "Logout",
    },
  ]



  return (
    <>

    

      <BrowserRouter>     
      <Header /> 

      <Routes>

        {routes.map((route) => (

          <Route key={route.name} path={route.path} element={route.element}/>

        ))}

      </Routes>
         
      </BrowserRouter>

      <Footer/>
      
    </>
  );
}

export default App;

