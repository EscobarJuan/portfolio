import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import Proyectos from './Components/Proyectos'
import {BrowserRouter,Routes,Route,Link, Outlet} from "react-router-dom";
import ProyectosList from './Pages/ProyectosList';
import{VideoProvider, useVideo} from './Components/Video-Context'

export default 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProyectosList/>} />
        <Route path="projects" element={<Proyectos src={useVideo()}/>} />
      </Routes>
    </BrowserRouter>
  );
}

