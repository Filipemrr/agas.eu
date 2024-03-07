import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/joy/Button";
import {ButtonGroup} from "@mui/joy";
import { useNavigate } from "react-router-dom"

const styles = {
    customButton: {
        border: 'none',
        fontWeight: 400,
        fontFamily: 'Inter, sans-serif',
        color: 'white',
        borderBottom: '2px solid transparent',
        '&:hover': {
            color: 'white',
            backgroundColor: 'transparent',
            borderBottom: '2px solid #C4ECB2',
        },
        '&:not(:first-of-type)': {
            marginLeft: '0.5rem',
        },
    },
    buttonGroup: {
        border: 'none',
        backgroundColor: 'transparent',
        '--ButtonGroup-separatorSize': '0px',
        '--ButtonGroup-radius:': '0px'
    }
};

export default function Navbar() {
    const navigate = useNavigate();
    const handleClick = (route: string) => () => {
        navigate(route);
    };
    return (
        <Box sx={{ position: 'absolute', width: '100%', zIndex: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent' }} elevation={0}>
                <Toolbar sx={{ justifyContent: 'flex-end' }}>
                    <ButtonGroup sx={{ ...styles.buttonGroup }} aria-label="button group">
                        <Button  sx={{ ...styles.customButton }} onClick={handleClick('/home')}>Home</Button>
                        <Button  sx={{ ...styles.customButton }} onClick={handleClick('/NostriProdotti')}>Prodotti</Button>
                        <Button  sx={{ ...styles.customButton }} onClick={handleClick('/chisiamo')}>Chi Siamo</Button>
                        <Button  sx={{ ...styles.customButton }} onClick={handleClick('/contatti')}>Contati</Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
