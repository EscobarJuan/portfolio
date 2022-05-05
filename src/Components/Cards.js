import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import { makeStyles } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Grid } from '@mui/material';
import { Box, margin } from "@mui/system";
import Proyectos from './Proyectos'
import ProyectosList from '../Pages/ProyectosList';
import App from "../App";
import { Router, Route } from "react-router-dom";


function Cards({projects}){
  const clickMe = (link) => {
    console.log(link);

  }
  return(
    <ImageList sx={{bgcolor:'black',margin:0}}cols={1} >
      <ImageListItem  key="Subheader"  >
        <ListSubheader  
          sx={{background:'linear-gradient(45deg,#010211 ,#020107)'}}
          component="div">
          <Typography 
            sx={{padding:2}}
            variant="h4" color="#fff" align="center">
            PORTFOLIO ING JUAN ESCOBAR
          </Typography>
        </ListSubheader>
      </ImageListItem>
      <ImageListItem >
        <Grid container >    
          {projects.map((project) => (
            <Box sx={{m:'auto', p:2}}>
              <ImageList sx={{overflow:'hidden',border:1,borderRadius:4,borderColor:'darkblue'}} cols={1}>
                <Card sx={{width:"100%"}} >
                  <CardActionArea 
                    onClick={() => 
                    {clickMe(project.link)}}
                    href="/projects"
                    >
                    <CardMedia sx={{width:"100%"}} >
                      <ImageListItem key={project.img} >
                        <img   
                          src={`${project.img}?w=350&h=233&fit=crop&auto=format`}
                          srcSet={`${project.img}?w=350&h=233&fit=crop&auto=format&dpr=2 2x`}
                          alt={project.title}
                          loading="lazy"
                        />
                        <ImageListItemBar 
                          title={project.title}
                          subtitle={project.description}
                          actionIcon={
                            <IconButton
                              sx={{color: 'rgba(255, 255, 255, 0.54)' }}
                              aria-label={`info about ${project.title}`}
                            >
                            </IconButton>
                          }> 
                        </ImageListItemBar>
                      </ImageListItem>
                    </CardMedia>
                  </CardActionArea>
                </Card> 
              </ImageList>            
            </Box>
          ))}
         </Grid>
      </ImageListItem>
    </ImageList>
  )
}
    
export default Cards