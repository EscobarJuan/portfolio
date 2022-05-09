import React, { useContext } from "react";
import CardMedia from '@mui/material/CardMedia'
import {BrowserRouter,Routes,Route,Link, Outlet, Router} from "react-router-dom";
import VideoContext from './Video-Context'
import { Button, CardContent, Container, ImageListItem } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ResponsiveEmbed from "react-responsive-embed";

function Proyectos(props){

    console.log(props);
    return(
        <div>
            <Card sx={{ bgcolor:"#D2D2E3", height:'50vh'}}>
                
                    {props.src == "http://www.escuelasuperiordeguerra.iese.edu.ar/" ?  
                           <ResponsiveEmbed src={props.src}  allowFullScreen/> 
                        : 
                        <Card sx={{ bgcolor:"#D2D2E3", border:2, borderColor:'darkblue'}}>
                            <CardMedia sx={{maxWidth:800, m:0, ml:'auto', mr:'auto'}}>
                                <ResponsiveEmbed src={props.src}  ratio = ' 3:1.5 '/>  
                            </CardMedia>
                        </Card>
                    }
               
                <Typography sx={{padding:4}} textAlign="center" /*LinkedIn */>
                    <Button variant="outlined" sx={{bgcolor:'white', m:0.3}} href="/">Volver</Button>
                </Typography>
            </Card>
        </div>
    );
}

export default Proyectos