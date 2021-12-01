import { Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <Typography variant="h1" sx={{ color: 'red', fontWeight: 'bold', my: 16 }}>
                404 <br />
                Sorry, Page not found
            </Typography>
        </div>
    );
};

export default NotFound;