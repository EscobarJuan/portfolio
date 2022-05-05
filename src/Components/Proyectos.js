import React from "react";
import CardMedia from '@mui/material/CardMedia'

function Proyectos(props){
    return(
        <div>
            <CardMedia
                sx={{height:'90vh', width:'80vw', margin:'auto'}}
                component="iframe"
                src={props.src}
            />
        </div>
    )
}
export default Proyectos