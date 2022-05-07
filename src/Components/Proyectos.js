import React, { useContext } from "react";
import CardMedia from '@mui/material/CardMedia'
import {BrowserRouter,Routes,Route,Link, Outlet, Router} from "react-router-dom";
import VideoContext from './Video-Context'
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ResponsiveEmbed from "react-responsive-embed";


function Proyectos(props){

    console.log(props);
    return(
        <div>
            <Card sx={{ bgcolor:"#D2D2E3"}}>
                <CardMedia sx={{maxWidth:800, m:2, ml:'auto', mr:'auto'}}>
                    <ResponsiveEmbed src={props.src}  ratio = ' 3:2 '/>
                    <Typography sx={{padding:2}} textAlign="center" /*LinkedIn */>
                        <Button variant="outlined" sx={{bgcolor:'white', m:0.3}} href="/">Volver</Button>
                    </Typography>
                </CardMedia>
            </Card>
        </div>
    );
}

export default Proyectos