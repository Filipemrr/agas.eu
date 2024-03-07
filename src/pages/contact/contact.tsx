import * as React from 'react';
import Card from '@mui/material/Card'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {Grid, Typography} from "@mui/material";
import Navbar from "../../components/navbar/toolbar";
import ToolbarComponent from "../../components/toolbar/toolbar";
import "./style.css";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import FooterPage from "../../components/Footer/FooterPage";
import logo from "../../images/logo.png";



const TitleSectionOne: React.FC = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h2" fontWeight="bold" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', textAlign: 'center', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Contatti
            </Typography>
        </Grid>
    );
}

const ContactCard: React.FC = () => {
    return (
        <Grid container sx={{ padding: '100px'}}>
            <Card sx={{ 
                display: 'flex', 
                width: '1000px',
                height: '350px',
                margin: 'auto',
                borderRadius: '20px',
                backgroundColor: '#15171F'
                }}>
                <Box sx={{ width: "350px", height: "100%", borderRight: "5px solid #2EA360", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CardMedia
                            component="img"
                            sx={{ 
                                maxWidth: "220px", // or specific px value
                                maxHeight: "300px", // Adjust this value to make the image smaller
                                objectFit: 'contain' // Keeps aspect ratio and fits the content within the bounds
                            }}
                            image={logo}
                            alt="Live from space album cover"
                        />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', m: 2 }}>
                    <CardContent sx={{ color: 'white', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        aGAS © by vf srl
                        </Typography>
                        <Typography variant="body2">
                        Sede Operativa: CCIAA di Vicenza
                        </Typography>
                        <Typography variant="body2">
                        Tel.: +393713757628
                        </Typography>
                        <Typography variant="body2">
                        Email: info@vastfast.it
                        </Typography>
                        <Typography variant="body2">
                        P.IVA 03418740241
                        </Typography>
                        <Typography variant="body2">
                        CCIAA di Vicenza
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    </Box>
                </Box>
            </Card> 
        </Grid>
    );
}

const Contatti: React.FC = () => {
    return (
        <Grid container direction="column">
            <Grid item>
                <ToolbarComponent/>
                <Navbar />
                <InfoBanner tittleComponent={<TitleSectionOne/>}/>
            </Grid>
            <Grid item xs={12} sx={{background: '#D4D4D4'}} direction="column">
                <ContactCard />
            </Grid>
                <FooterPage/>
        </Grid>
    );
}
export default Contatti;