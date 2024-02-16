import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {Grid, Typography} from "@mui/material";
import {ReactNode} from "react";


interface IconWithTextProps {
    icon: ReactNode;
    text: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({icon, text}) => {
    return (
        <Grid item md={1.5} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
            {icon}
            <Typography sx={{paddingLeft: "5px", fontSize: "13px"}}>{text}</Typography>
        </Grid>
    );
}

export default function ToolbarComponent() {
    return (
        <Grid container>
            <AppBar position="static">
                <Toolbar sx={{ backgroundColor: '#15171F', borderBottom: '3px solid green' }}>
                    <Grid container md={12}>
                        <Typography sx={{
                            fontSize: "15px",
                            paddingRight: "3vh",
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