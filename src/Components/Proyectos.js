import React, { useContext } from "react";
import CardMedia from '@mui/material/CardMedia'
import {BrowserRouter,Routes,Route,Link, Outlet, Router} from "react-router-dom";
import VideoContext from './Video-Context'
import { Avatar, Button, CardActionArea, CardActions, IconButton, ImageListItem } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ResponsiveEmbed from "react-responsive-embed";
import LogoFie from '../Images/LogoFie.png'


function Proyectos(props){

    console.log(props);
    return(
        <div>
            <Card sx={{ bgcolor:"#D2D2E3", height:'120vh'}}>

                {props.src=="http://www.escuelasuperiordeguerra.iese.edu.ar/" ?
                    <CardActionArea href={props.src}>
                        <CardMedia sx={{maxWidth:800, m:2, ml:'auto', mr:'auto', textAlign:'center'}}>
                            <img width={"30%"} height="30%" src={LogoFie}/>
                        </CardMedia>  
                    </CardActionArea>                         
                :
                    <Card sx={{ bgcolor:"#D2D2E3", border:2, borderColor:'darkblue'}}>
                        <CardMedia sx={{maxWidth:800, m:0, ml:'auto', mr:'auto'}}>
                            <ResponsiveEmbed src={props.src} width='80vw' ratio = ' 3:1 '/>  
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