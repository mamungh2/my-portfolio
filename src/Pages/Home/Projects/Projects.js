import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Project from '../Project/Project';

const projects = [
    {
        id: 0,
        name: 'Manual Wind Watches',
        img: 'https://i.ibb.co/0F19mt1/manualwatch.jpg',
        description: "A Watch selling website, In this project I have used React as Javascript library for building user interfaces, React router for routing various pages without reloading website, Material ui as html, css and javascript framework. We have used google's firebase technology as our authentication system and website hosting area. Every pages color are eye friendly, so it is very easy to visit our site. We used some image optimized tool so that website can load very fast."
    },
    {
        id: 1,
        name: 'Mamun Courier Services',
        img: 'https://i.ibb.co/2qxRPSh/mamuncourier.jpg',
        description: "It is Courier services website. A simple react project with very amazing functionalities. In this project I have used React as javascript library for building user interfaces, react router for routing different pages, bootstrap as html,css and javascript framework. I have used firebase as user authentication purposes. For storing data I have used Mongodb atlas database system."
    },
    {
        id: 2,
        name: 'International Specialized Hospital',
        img: 'https://i.ibb.co/HzNphVG/inthospital.jpg',
        description: "This website is about hospital and health research. In this project I have used React as Javascript library for building user interfaces, React router for routing various pages without reloading website, fontawesome library as icon toolkits, Bootstrap as html, css and javascript framework. We have used google's firebase technology as our authentication system and website hosting area. Every pages color are eye friendly, so it is very easy to visit our site. We used some image optimized tool so that website can load very fast"
    },
    {
        id: 3,
        name: 'Mamun Arduino Academy',
        img: 'https://i.ibb.co/rHyXqvm/arduinoacademy.jpg',
        description: "This is arduino learning site. In this project I have used React as Javascript library for building user interfaces, fontawesome as icon toolkits, (Bootstrap,react-bootstrap as html,css and javascript framework. This is a website to learn mecha-electronics concept to automate and easy our life."
    },
    {
        id: 4,
        name: 'Eco-Friendly Vehicle Design Project',
        img: 'https://i.ibb.co/njtK2G1/ecofriendly1.jpg',
        description: "In this project I have used React as Javascript library for building user interfaces, fontawesome as icon toolkits, Bootstrap as html,css and javascript framework. This is a website to make eco-friendly concept vehicle to save our environment. You can hire greatest scientist who are experts various field specialy green energy."
    }
]

const Projects = () => {
    return (
        <Container>
            <Typography sx={{ my: 5 }} variant="h3" component="div" gutterBottom>
                My Projects
            </Typography>
            <Grid container rowSpacing={6} columnSpacing={{ xs: 2, sm: 2, md: 1 }}>
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </Grid>
        </Container>
    );
};

export default Projects;