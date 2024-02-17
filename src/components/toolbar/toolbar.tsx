import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {ReactNode} from "react";
import {useMediaQuery} from "@mui/material";
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
export default function ButtonAppBar() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: '#15171F' }}>
                <Toolbar>
                    <Typography sx={{
                        fontSize: "15px",
                        paddingRight: "6vh",
                        fontFamily: "Alegreya SC, sans-serif"
                    }}>Servizio Clienti</Typography>
                    <Box sx={{ display: 'flex', alignItems:'flex-end',border:"1px solid red", marginLeft: isSmallScreen ? "35%" : "0"}}>
                        <IconWithText icon={<AccessTimeIcon />} text={"Lun/Ven 10-13  15-18"} />
                        <IconWithText icon={<LocalPhoneIcon />} text={"+39 371 375 7628"} />
                        <IconWithText icon={<MailOutlineIcon />} text={"info@agas.eu"} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
