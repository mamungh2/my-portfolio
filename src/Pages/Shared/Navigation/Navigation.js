import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><Button color="inherit">Home</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/#about"><Button color="inherit">About</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/allProject"><Button color="inherit">Projects</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/blogs"><Button color="inherit">Blogs</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact"><Button color="inherit">Contact</Button></Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;