import { Container, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import DetailProject from '../DetailProject/DetailProject';

const allProject = [
    {
        id: 1,
        name: 'Manual Wind Watches',
        img: 'https://i.ibb.co/HYwpCGQ/manualwatch.jpg',
        description: "A Watch selling website, In this project I have used React as Javascript library for building user interfaces, React router for routing various pages without reloading website, Material ui as html, css and javascript framework. We have used google's firebase technology as our authentication system and website hosting area. Every pages color are eye friendly, so it is very easy to visit our site. We used some image optimized tool so that website can load very fast.",
        liveSite: 'https://manual-wind-watches.web.app/',
        clientCode: 'https://github.com/mamungh2/assignment-12-manual-wind-watches',
        serverCode: 'https://github.com/mamungh2/assignment-12-manual-wind-watches-server'
    },
    {
        id: 2,
        name: 'Mamun Courier Services',
        img: 'https://i.ibb.co/TK2D5wB/mamuncourier.jpg',
        description: "It is Courier services website. A simple react project with very amazing functionalities. In this project I have used React as javascript library for building user interfaces, react router for routing different pages, bootstrap as html,css and javascript framework. I have used firebase as user authentication purposes. For storing data I have used Mongodb atlas database system.",
        liveSite: 'https://react-firebase-authentic-f71b8.web.app/',
        clientCode: 'https://github.com/mamungh2/assignment-11-react-firebase-authentication',
        serverCode: 'https://github.com/mamungh2/assignment-11-react-firebase-authentication-server'
    },
    {
        id: 3,
        name: 'International Specialized Hospital',
        img: 'https://i.ibb.co/chGb7jN/inthospital.jpg',
        description: "This website is about hospital and health research. In this project I have used React as Javascript library for building user interfaces, React router for routing various pages without reloading website, fontawesome library as icon toolkits, Bootstrap as html, css and javascript framework. We have used google's firebase technology as our authentication system and website hosting area. Every pages color are eye friendly, so it is very easy to visit our site. We used some image optimized tool so that website can load very fast",
        liveSite: 'https://int-specialized-hospital.web.app/',
        clientCode: 'https://github.com/mamungh2/assignment-10-int-specialized-hospital'
    },
    {
        id: 4,
        name: 'Mamun Arduino Academy',
        img: 'https://i.ibb.co/4fZ7w1C/arduinoacademy.jpg',
        description: "This is arduino learning site. In this project I have used React as Javascript library for building user interfaces, fontawesome as icon toolkits, (Bootstrap,react-bootstrap as html,css and javascript framework. This is a website to learn mecha-electronics concept to automate and easy our life.",
        liveSite: 'https://mamunarduinoacademy.netlify.app/',
        clientCode: 'https://github.com/mamungh2/assignment-9-arduino-academy'
    },
    {
        id: 5,
        name: 'Eco-Friendly Vehicle Design Project',
        img: 'https://i.ibb.co/26QRWXw/ecofriendly.jpg',
        description: "In this project I have used React as Javascript library for building user interfaces, fontawesome as icon toolkits, Bootstrap as html,css and javascript framework. This is a website to make eco-friendly concept vehicle to save our environment. You can hire greatest scientist who are experts various field specialy green energy.",
        liveSite: 'https://ecofriendlyvehicledesign.netlify.app/',
        clientCode: 'https://github.com/mamungh2/assignment-8-ecofriendly-vehicle-design'
    }
]

const AllProject = () => {
    return (
        <Container>
            <Typography sx={{ my: 5 }} variant="h3" component="div" gutterBottom>
                Explore all of my projects
            </Typography>
            <Grid container rowSpacing={6} columnSpacing={{ xs: 2, sm: 2, md: 1 }}>
                {
                    allProject.map(project => <DetailProject key={project.id} project={project}></DetailProject>)
                }
            </Grid>
        </Container>
    );
};

export default AllProject;