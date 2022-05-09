import React from "react";
import Cards from "../Components/Cards";
import Proyectos from "../Components/Proyectos"
import SK105Img from '../Images/SK105.png' 
import MedTemp from '../Images/MedTemp.png'
import SimKite from '../Images/SimKite.jpg'
import GyJ from '../Images/GyJ.png'
import SaveTheBall from '../Images/SaveTheBall.png'
import Echair from '../Images/Echair.png'
import JuegoEST from '../Images/JuegoEST.png'

class ProyectosList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data : [
          {
            id:1,
            img: `${SK105Img}`,
            title: 'Simulador de Tiro de Tanque',
            description: 'Con calculos balísticos reales',
            link:"https://www.youtube.com/embed/99xpLFocdAI",
          },
          {
            id:2,
            img:  `${SimKite}`,
            title: 'Simulador VR de Manejo de Kitesurf',
            description: 'Proyecto final de carrera',
            link:"https://www.youtube.com/embed/cBZI4EByklI",
          },
          {
            id:3,
            img: `${JuegoEST}`,
            title: 'Videojuego en 3ra Persona',
            description: 'Escenario inspirado en la Facultad',
            link:"https://www.youtube.com/embed/Onx34kHcAC0",
          },
          {
            id:4,
            img: `${GyJ}`,
            title: 'Videojuego en 1ra Persona',
            description: 'Empleado para propuesta de casamiento',
            link:"https://www.youtube.com/embed/jSc5OguxzlM",
          },
          {
            id:5,
            img: `${SaveTheBall}`,
            title: 'Videojuego touch screen',
            description: '@hjrc33',
            link:"https://www.youtube.com/embed/UA3ghy65hb8",
          },
          {
            id:6,
            img: `${MedTemp}`,
            title: 'Proyecto MEDTEMP',
            description: 'Desarrollado para el Ministerio de Defensa Argentino ',
            link:"http://www.escuelasuperiordeguerra.iese.edu.ar/",
          },
          {
            id:7,
            img: `${Echair}`,
            title: 'Echair',
            description: 'Prototipo de silla personas con movilidad reducida',
            link:"https://www.youtube.com/embed/L8up2-bKew8",
          },
      ]
    }   
  }
  render(){
    return(
      <div>
        <Cards
          projects={this.state.data}
        />
      </div>
    )
  }
}
export default ProyectosList