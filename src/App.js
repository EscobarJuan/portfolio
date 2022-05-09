
import Proyectos from './Components/Proyectos'
import {BrowserRouter,Routes,Route,Link, Outlet} from "react-router-dom";
import ProyectosList from './Pages/ProyectosList';
import{ VideoContext} from './Components/Video-Context'
import { useState } from 'react';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import CartaPresentacion from './Pages/CartaPresentacion'

const App = () =>{ 

const [video, setVideo] =useState({});

  return (
    <div>
      <ResponsiveAppBar />

      <VideoContext.Provider value={{
        video,
        setVideo,
        }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ProyectosList/>} />
            <Route exact path="projects" element={<Proyectos src={video}/>} />
            <Route exact path="cartaPresentacion" element={<CartaPresentacion/>} />
          </Routes>
        </BrowserRouter>
      </VideoContext.Provider>
    </div>
  )
}

export default App;
