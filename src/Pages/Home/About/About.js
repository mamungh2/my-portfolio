import { Typography, Container, Box, Grid } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <Container id="aboutMe" sx={{ width: '60%' }}>
            <Typography sx={{ mt: 7, mb: 3 }} variant="h3" component="div" gutterBottom>
                About Me
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
                <span style={{ fontSize: '20px' }}>I'm</span>  <span style={{ color: 'green', fontWeight: 'bold' }}>Md. Rafiqul Islam Mamun</span>
            </Typography>
            <Typography variant="h6" component="div" gutterBottom>
                A Lead Web Developer based in <span style={{ color: 'red' }}>Bangladesh</span>
            </Typography>
            <Typography variant="body1" component="div" sx={{ textAlign: 'left' }} gutterBottom>
                I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Please check out my Portfolio.
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

        </Container>
    );
};

export default About;