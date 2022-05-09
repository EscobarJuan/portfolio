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
            resenia:`Este proyecto se encuentra en proceso de desarrollo. 
            Consta de dos subsitemas, por un lado el hardware colocado en el tanque y por el otro una interfaz gráfica que recibe esos datos
            de movimiento y permite disparar con calculos balísticos reales.`,
            parrafo1:`Como entregable fue solicitado un simulador que permita ejecutar las acciones que realiza el apuntador a bordo del tanque. 
            Para ello se fabricaron partes moviles adaptadas al vehíluco, lo que permite recibir los datos de movimientos del tubo cañón y el disparo.`,
            parrafo2:`Asimismo, la trayectoria descripta por la munición en el simulador debía respetar las perturbaciones balísticas recibidas por el entorno.`
          },
          {
            id:2,
            img:  `${SimKite}`,
            title: 'Simulador VR de Manejo de Kitesurf',
            description: 'Proyecto final de carrera',
            link:"https://www.youtube.com/embed/cBZI4EByklI",
            resenia:"Simulador de manejo de Kitesurf desarrollado en Realidad Virtual como proyecto final de carrera.",
            parrafo1:`El Kitesurf es un deporte extremo y más del 80% de los accidentes en este deporte ocurren en la etapa inicial. `,
            parrafo2:"",
          },
          {
            id:3,
            img: `${JuegoEST}`,
            title: 'Videojuego en 3ra Persona',
            description: 'Escenario inspirado en la Facultad',
            link:"https://www.youtube.com/embed/Onx34kHcAC0",
            resenia:"",
            parrafo1:"",
            parrafo2:"",
          },
          {
            id:4,
            img: `${GyJ}`,
            title: 'Videojuego en 1ra Persona',
            description: 'Empleado para propuesta de casamiento',
            link:"https://www.youtube.com/embed/jSc5OguxzlM",
            resenia:"",
            parrafo1:"",
            parrafo2:"",
          },
          {
            id:5,
            img: `${SaveTheBall}`,
            title: 'Videojuego touch screen',
            description: '@hjrc33',
            link:"https://www.youtube.com/embed/UA3ghy65hb8",
            resenia:"",
            parrafo1:"",
            parrafo2:"",
          },
          {
            id:6,
            img: `${MedTemp}`,
            title: 'Proyecto MEDTEMP',
            description: 'Desarrollado para el Ministerio de Defensa Argentino ',
            link:"http://www.escuelasuperiordeguerra.iese.edu.ar/",
            resenia:"",
            parrafo1:"",
            parrafo2:"",
          },
          {
            id:7,
            img: `${Echair}`,
            title: 'Echair',
            description: 'Prototipo de silla personas con movilidad reducida',
            link:"https://www.youtube.com/embed/L8up2-bKew8",
            resenia:"",
            parrafo1:"",
            parrafo2:"",
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