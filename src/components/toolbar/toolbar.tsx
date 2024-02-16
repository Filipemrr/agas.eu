import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import logo from './logo.png';
import {Container, Grid, Typography} from "@mui/material";
import {ReactNode} from "react";

//<img src={logo} alt="imagem da logo" style={{height: 40}}></img>
interface IconWithTextProps {
    icon: ReactNode;
    text: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({icon, text}) => {
    return (
        <Grid item md={1.6} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
            {icon}
            <Typography sx={{paddingLeft: "5px", fontSize: "13px"}}>{text}</Typography>
        </Grid>
    );
}

export default function ButtonAppBar() {
    return (
        <Grid container>
            <AppBar position="static">
                <Toolbar sx={{ backgroundColor: '#15171F', borderBottom: '3px solid green' }}>
                    <Grid container md={12}>
                        <Typography sx={{
                            paddingLeft: "5px",
                            fontSize: "18px",
                            paddingRight: "4vh",
                            fontFamily: "Alegreya SC, sans-serif"
                        }}>Servizio Clienti</Typography>
                        <IconWithText icon={<AccessTimeIcon />} text={"Lun/Ven 10-13  15-18"} />
                        <IconWithText icon={<LocalPhoneIcon />} text={"+39 371 375 7628"} />
                        <IconWithText icon={<MailOutlineIcon />} text={"info@agas.eu"} />
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}