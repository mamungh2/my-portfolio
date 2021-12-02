import { Typography, Container, Grid, Box } from '@mui/material';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const About = () => {
    return (
        <Container id="about" sx={{ width: '60%' }}>

            <Typography sx={{ mt: 8, mb: 2 }} variant="h3" component="div">
                About <span style={{ color: 'green', fontWeight: 'bold' }}>Me</span>
            </Typography>

            <ScrollAnimation animateIn="bounceInUp">
                <Typography variant="h5" component="div">
                    <span style={{ fontSize: '20px' }}>I'm</span>  <span style={{ color: '#C0392B', fontWeight: 'bold' }}>Md. Rafiqul Islam Mamun</span>
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                    <Box component="span" sx={{ fontWeight: 'light' }}>A Lead Web Developer based in</Box> <span style={{ color: 'red' }}>Bangladesh</span>
                </Typography>
                <Typography variant="body1" component="div" sx={{ textAlign: 'left', fontSize: '18px' }} gutterBottom>
                    I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Please check out my Portfolio.
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', mt: 3, fontSize: '18px' }} component="div" gutterBottom>
                    I like to work with very precision and with very sincere as customer needs. It is my addiction to solve any problem on my own.
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'left', mt: 3, ml: 2 }} component="div" gutterBottom>
                    My skills -
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <ul style={{ fontSize: '18px' }}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <ul style={{ fontSize: '18px' }}>
                            <li>Material UI</li>
                            <li>NodeJs</li>
                            <li>ExpressJs</li>
                            <li>MongoDB</li>
                        </ul>
                    </Grid>
                </Grid>
            </ScrollAnimation>
        </Container>
    );
};

export default About;