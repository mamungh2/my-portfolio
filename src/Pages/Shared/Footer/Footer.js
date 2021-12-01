import { Container, Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'black', color: 'gray', mt: 8, py: 5 }}>
            <Container>
                <Typography sx={{ color: 'lightGray', mb: 0 }} variant="body1" component="div" gutterBottom>
                    © 2021 by Md. Rafiqul Islam Mamun. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;