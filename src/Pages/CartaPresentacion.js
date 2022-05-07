import { Button, CardMedia } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FotoAvatar from "../Images/FotoAvatar.jfif"
import { Card } from "react-bootstrap";
import { textAlign } from "@mui/system";

const CartaPresentacion=()=>{
    return(
        <div>
            <Box sx={{ width: '100%', m:'auto', textAlign:'center'}}>
                <CardMedia component="img" image={FotoAvatar} sx={{width:200}}/>
                <Typography variant="body1" gutterBottom sx={{p:2}}>
                Soy <b>Ingeniero Electrónico</b> con orientación al Control. Actualmente participo en la <b>elaboración de simuladores</b> para el Ejército Argentino. <br></br>
                Soy una persona <b>perfeccionista y voluntariosa</b>, con una gran capacidad de aprendizaje y muy dedicado al trabajo. <br></br>
                A lo largo de mi carrera he intentado adquirir tanto conocimientos técnicos como humanos realizando especializaciones y cursos en ambas áreas. Tengo un <b>Máster en Recursos Humanos y Gestión del Conocimiento</b>en la Universidad Europea del Atlántico y un <b> Máster en Administración Gerencial</b> en la Universidad Internacional Iberoamericana. Asimismo he realizado cursos de desarrollo web Full Stack, RPA, desarrollo de videojuegos, programación de microcontroladores, programación orientada a objetos y me desempeñé como Auxiliar de Laboratorio de Mecatrónica.<br></br>
                Egresé del Colegio Militar de la Nación Argentina como <b>Licenciado en Gestión y Conducción Operativa</b>, alcanzando el grado de Capitán. <br></br>
                En 2011, fui designado como Jefe de Patrulla en Chipre por las Naciones Unidas y realicé la mayoría de sus cursos de capacitación, siendo reconocido por el Comandante de la ONU en Chipre por mi desempeño profesional.<br></br>
                En 2015 realicé un especialización en Ciencias Militares en la Escuela de perfeccionamiento de Oficiales en Río de Janeiro, Brasil. <br></br>
                Me desempeñé como profesor en la Escuela de Artillería del Ejército e Instructor en la Escuela de Suboficiales. <br></br>
                Puedo comunicarme en español, inglés o portugués. <br></br>
                </Typography>
                <Typography textAlign="center"  /*LinkedIn */>
                    <Button variant="outlined" href="/">Volver</Button>
                </Typography>
            </Box>
        </div>
    )
}

export default CartaPresentacion;