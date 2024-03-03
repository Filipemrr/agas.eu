import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {ReactNode} from "react";
import {useMediaQuery} from "@mui/material";
import {Settings} from "@mui/icons-material";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import {ButtonGroup} from "@mui/joy";
interface IconWithTextProps {
    icon: ReactNode;
    text: string;
}
const IconWithText: React.FC<IconWithTextProps> = ({icon, text}) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '5px'}}>
            {icon}
            {!isSmallScreen && (
                <Typography sx={{fontSize: "13px" }}>{text}</Typography>
            )}
        </Box>

    );
}

export default function Navbar() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <Box sx={{ position: 'absolute', width: '100%', zIndex: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent' }} elevation={0}>
                <Toolbar sx={{ justifyContent: 'flex-end' }}>
                    <Box sx={{ display: 'flex', alignItems:'end', marginLeft: isSmallScreen ? "35%" : "0"}}>
                        <ButtonGroup spacing="0.5rem" aria-label="spacing button group">
                            <Button sx={{ fontWeight: 'Lighter', fontFamily: 'Inter, sans-serif', color: 'white', '&:hover': {backgroundColor: 'green'} }}>Home</Button>
                            <Button sx={{ fontWeight: 'Lighter', fontFamily: 'Inter, sans-serif', color: 'white', '&:hover': {color: 'green'} }}>Prodotti</Button>
                            <Button sx={{ fontWeight: 'Lighter', fontFamily: 'Inter, sans-serif', color: 'white', '&:hover': {color: 'green'} }}>Chi Siamo</Button>
                            <Button sx={{ fontWeight: 'Lighter', fontFamily: 'Inter, sans-serif', color: 'white', '&:hover': {color: 'green'} }}>Contati</Button>
                            <IconButton>
                                <Settings />
                            </IconButton>
                        </ButtonGroup>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
