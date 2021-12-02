import { Container, Typography, Box } from '@mui/material';
import React from 'react';

const Blogs = () => {
    return (
        <Container>
            <Typography variant="h3" sx={{ my: 5 }}>
                <Box component="span" sx={{ color: 'green', fontWeight: 'bold' }}>My</Box> Blogs
            </Typography>
            <Typography variant="h6">
                comming soon ...
            </Typography>
        </Container>
    );
};

export default Blogs;