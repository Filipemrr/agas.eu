import React from "react";
import {Box, Grid, Typography, useMediaQuery,  SvgIcon, Button} from "@mui/material";
import Footer from "../../components/Footer/FooterPage"
import Toolbar from "../../components/toolbar/toolbar";
import './style.css';
import ToolbarComponent from "../../components/toolbar/toolbar";
import Navbar from "../../components/navbar/toolbar";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SecurityIcon from '@mui/icons-material/Security';


const TitleSectionOne: React.FC = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h2" fontWeight="bold" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', textAlign: 'center', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Nostri Prodotti
            </Typography>
        </Grid>
    );
}
const TitleFilter: React.FC = () => {
    return (
        <Grid container direction="column" display="flex" justifyContent="center" alignItems="center" textAlign="center">
            <Grid item>
                <Typography variant="h3" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 'bold', fontSize:"30px"}}>CATEGORIE</Typography>
                <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 'lighter',fontSize:"9px", paddingTop:"1%"}}>SELEZIONA LA CATEGORIA DI TUO INTERESSE PER VISUALIZZARE I PRODOTTI.</Typography>
            </Grid>
        </Grid>
    );
};
const GreenBarSection: React.FC = () => {
        return (
            <Box sx={{ width: '100%', backgroundColor: '#8CB29C', color: 'white' }}>
                <Grid container justifyContent="space-around" alignItems="center" sx={{ p: 1 }}>
                    <Grid item>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.8rem' }}>
                            <SvgIcon component={LocalShippingIcon} sx={{ fontSize: '1.5rem', mb: 0.5 }} />
                            <Typography variant="caption" sx={{ fontSize: '0.6rem' }}>SPEDIZIONE <br/>GARANTIDA</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.8rem' }}>
                            <SvgIcon component={HeadsetMicIcon} sx={{ fontSize: '1.5rem', mb: 0.5 }} />
                            <Typography variant="caption" sx={{ fontSize: '0.6rem' }}>ASSISTENZA 24/7</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.8rem' }}>
                            <SvgIcon component={SecurityIcon} sx={{ fontSize: '1.5rem', mb: 0.5 }} />
                            <Typography variant="caption" sx={{ fontSize: '0.6rem' }}>PAGAMENTI SICURI</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        );
    };

function LavanderiaButtons() {
    return (
        <Box sx={{ width: '100%', borderColor: 'primary.main', p: 2, padding: '15px' }}>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h6" color="black" sx={{fontFamily: 'Inter, sans-serif', fontSize: "0.8rem"}}>LAVANDERIA</Typography>
                </Grid>
                <Grid item md={8}>
                    <Box sx={{ height: 3, backgroundColor: "#8CB29C" }} />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
                <Button
                    variant="text"
                    sx={{color: "black",fontFamily: 'Inter, sans-serif', fontSize: '0.650rem', '&:hover': {backgroundColor: '#8CB29C',},}}>
                    Secadora
                </Button>
                <Button
                    variant="text"
                    sx={{color: "black",fontFamily: 'Inter, sans-serif', fontSize: '0.650rem', '&:hover': {backgroundColor: '#8CB29C',},}}>
                    Secadora
                </Button>
                <Button
                    variant="text"
                    sx={{color: "black",fontFamily: 'Inter, sans-serif', fontSize: '0.650rem', '&:hover': {backgroundColor: '#8CB29C',},}}>
                    Secadora
                </Button>
            </Box>
        </Box>
    );
}

const Products: React.FC = () => {
    const isXS = useMediaQuery('(max-width:600px)');
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid item>
                <ToolbarComponent/>
                <Navbar />
                <InfoBanner tittleComponent={<TitleSectionOne/>}/>
            </Grid>

            <Grid container sx={{paddingTop: '5%', paddingBottom: "5%",backgroundColor: '#D9D9D9'}}>
                <Grid item md={3} xs={3}  sx={{height:"100vh", borderRight: "2.5px solid #8CB29C"}}>
                    <TitleFilter/>
                    <GreenBarSection/>
                    <LavanderiaButtons/>
                    <LavanderiaButtons/>
                    <LavanderiaButtons/>
                </Grid>
                <Grid item md={9} xs={9}  sx={{height:"60vh"}}>
                </Grid>
            </Grid>
            <Footer/>
        </Box>
    );
};

export default Products;