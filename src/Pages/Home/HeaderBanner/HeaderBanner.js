import React from 'react';
import bg from '../../../images/headerbanner.jpg';
import { Box, Button, Grid, Typography } from '@mui/material';
import mypic from '../../../images/mypic.jpg';
import { Link } from 'react-router-dom';
import resume from '../../../images/Md. Rafiqul Islam Mamun_resume.pdf';
import ScrollAnimation from 'react-animate-on-scroll';

const HeaderBanner = () => {
    const bannerBg = {
        background: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundBlendMode: 'lighten, luminosity',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '480px',
    }
    return (
        <Box style={{ ...bannerBg, marginTop: '16px' }}>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'left' }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box>
                        <Typography sx={{ color: 'lightGray' }} variant="h6" component="div" gutterBottom>
                            Hi, I'am
                        </Typography>
                        <ScrollAnimation animateIn="bounceInLeft">
                            <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '50px' }} variant="h4" component="div" gutterBottom>
                                Rafiqul Islam Mamun
                            </Typography>
                        </ScrollAnimation>
                        <Typography sx={{ color: 'white', mb: 0 }} variant="h4" component="div" gutterBottom>
                            React Developer
                        </Typography>
                        <Typography sx={{ color: 'red' }} variant="h5" component="div" gutterBottom>
                            Based in Bangladesh
                        </Typography>
                        <Link to={resume} target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}><Button variant="contained">Download Resume</Button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <ScrollAnimation animateIn="rotateIn">
                        <img style={{ borderRadius: '100px 0 80px 0px' }} src={mypic} alt="" />
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </Box >
    );
};

export default HeaderBanner;