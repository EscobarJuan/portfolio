import React from "react";
import CardMedia from '@mui/material/CardMedia'
import {BrowserRouter,Routes,Route,Link, Outlet, Router} from "react-router-dom";


function Proyectos(props){
    console.log(props);
    return(
        <div>
            <CardMedia
                sx={{height:'90vh', width:'80vw', margin:'auto'}}
                component="iframe"
                src={props.src}
            />
        </div>
    );
}

export default Proyectos