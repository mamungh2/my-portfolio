import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const DetailProject = ({ project }) => {
    const { id, name, img, description, liveSite, clientCode, serverCode } = project;
    return (
        <Grid item xs={12} md={12}>
            {
                id === 0 || id === 2 || id === 4
                    ?
                    <ScrollAnimation animateIn="bounceInLeft">
                        <Card elevation={12} sx={{
                            margin: '0 auto',
                            maxWidth: 800, py: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }} >
                            <CardMedia sx={{ width: '98%', margin: '0 auto' }}
                                component="img"
                                image={img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign="left">
                                    {description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to={{ pathname: `${liveSite}` }} target='_blank' style={{ textDecoration: 'none', color: 'white' }}><Button style={{ margin: '0 auto' }} variant="contained">Live site</Button></Link>
                                <Link to={{ pathname: `${clientCode}` }} target='_blank' style={{ textDecoration: 'none', color: 'white' }}><Button style={{ margin: '0 auto' }} variant="contained">Client code</Button></Link>
                                {serverCode && <Link to={{ pathname: `${serverCode}` }} target='_blank' style={{ textDecoration: 'none', color: 'white' }}><Button style={{ margin: '0 auto' }} variant="contained">Server Code</Button></Link>}
                            </CardActions>
                        </Card>
                    </ScrollAnimation>
                    :
                    <ScrollAnimation animateIn="bounceInRight">
                        <Card elevation={12} sx={{
                            margin: '0 auto',
                            maxWidth: 800, py: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }} >
                            <CardMedia sx={{ width: '98%', margin: '0 auto' }}
                                component="img"
                                image={img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign="left">
                                    {description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to={{ pathname: `${liveSite}` }} target='_blank' style={{ textDecoration: 'none', color: 'white' }}><Button style={{ margin: '0 auto' }} variant="contained">Live site</Button></Link>
                                <Link to={{ pathname: `${clientCode}` }} target='_blank' style={{ textDecoration: 'none', color: 'white' }}><Button style={{ margin: '0 auto' }} variant="contained">Client code</Button></Link>
                                {serverCode && <Link to={{ pathname: `${serverCode}` }} target='_blank' style={{ textDecoration: 'none', color: 'white' }}><Button style={{ margin: '0 auto' }} variant="contained">Server Code</Button></Link>}
                            </CardActions>
                        </Card>
                    </ScrollAnimation>
            }
        </Grid >
    );
};

export default DetailProject;