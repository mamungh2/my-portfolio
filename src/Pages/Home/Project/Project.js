import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';



const Project = ({ project }) => {
    const { id, name, img, description } = project;

    return (
        <Grid item xs={12} md={6}>
            {
                id === 0 || id === 2 || id === 4
                    ?
                    <ScrollAnimation animateIn="bounceInLeft">
                        <Card elevation={12} sx={{ maxWidth: 445, py: 1, margin: '0 auto' }} >
                            <CardMedia sx={{ width: '30%', height: '100%', margin: '0 auto' }}
                                component="img"
                                height="100%"
                                // width="50px"
                                image={img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign="left">
                                    {description.slice(0, 142) + '...'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={`allProject/${id}`} style={{ textDecoration: 'none', margin: '0 auto' }}><Button variant="contained">Details</Button></Link>
                            </CardActions>
                        </Card>
                    </ScrollAnimation>
                    :
                    <ScrollAnimation animateIn="bounceInRight">
                        <Card elevation={12} sx={{ maxWidth: 445, py: 1, margin: '0 auto' }} >
                            <CardMedia sx={{ width: '30%', height: '100%', margin: '0 auto' }}
                                component="img"
                                height="100%"
                                // width="50px"
                                image={img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign="left">
                                    {description.slice(0, 142) + '...'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={`allProject/${id}`} style={{ textDecoration: 'none', margin: '0 auto' }}><Button variant="contained">Details</Button></Link>
                            </CardActions>
                        </Card>
                    </ScrollAnimation>
            }

        </Grid>
    );
};

export default Project;