import React, { useContext } from "react";
import CardMedia from '@mui/material/CardMedia'
import {BrowserRouter,Routes,Route,Link, Outlet, Router} from "react-router-dom";
import VideoContext from './Video-Context'
import { Button, ImageListItem } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ResponsiveEmbed from "react-responsive-embed";


function Proyectos(props){

    console.log(props);
    return(
        <div>
            <Card sx={{ bgcolor:"#D2D2E3", height:'120vh'}}>

                {props.src=="http://www.escuelasuperiordeguerra.iese.edu.ar/" ?
                    
                            <iframe src={props.src} width="100%" height="100%"/> 
                   
                :
                    <Card sx={{ bgcolor:"#D2D2E3", border:2, borderColor:'darkblue'}}>
                        <CardMedia sx={{maxWidth:800, m:0, ml:'auto', mr:'auto'}}>
                            <ResponsiveEmbed src={props.src}  ratio = ' 3:1.5 '/>  
                        </CardMedia>
                    </Card>
                }
                
                <Typography sx={{padding:2}} textAlign="center">
                    <Button variant="outlined" sx={{bgcolor:'white', m:0.3}} href="/">Volver</Button>
                </Typography>
            </Card>
        </div>
    );
}

export default Proyectos