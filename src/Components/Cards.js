import React, { useContext } from "react";
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
import{VideoContext} from './Video-Context'
import {Link} from "react-router-dom";


export default function Cards({projects}){

const {video} = useContext(VideoContext)
const {setVideo} = useContext(VideoContext)

console.log(video)

  const clickMe = (link) => {
    console.log(link);
  }
  return(
    <ImageList sx={{bgcolor:'#D2D2E3',margin:0}}cols={1} >
      <ImageListItem  key="Subheader"  >
        <ListSubheader  
          sx={{background:'#D2D2E3'}}
          component="div">
           
          <Typography 
            sx={{paddingTop:4}}
            color="darkblue" 
            align="center"
            fontFamily={ 'monospace'}
            fontSize= {40}
            fontWeight = {700}
            letterSpacing= {'.2rem'}
            >
            PROYECTOS
          </Typography>
       
        </ListSubheader>
      </ImageListItem>
      <ImageListItem >
        <Grid container >    
          {projects.map((project) => (
            <Box sx={{m:'auto', p:4}}>
              <Link to="/projects">
                <ImageList sx={{overflow:'hidden',border:2,borderRadius:4,borderColor:'darkblue'}} cols={1}>
                  <Card sx={{width:"100%"}} >
                    <CardActionArea 
                      onClick={() => 
                      {setVideo(project.link)}}
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
              </Link>     
            </Box>
          ))}
         </Grid>
      </ImageListItem>
    </ImageList>
  )
}

