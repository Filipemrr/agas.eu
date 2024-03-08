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
import ProductCardInFilter from "../../components/ProductInFilter/ProductCardInFilter";

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
                <Typography variant="h3" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 'bold', fontSize:"30px"}}>Categorie</Typography>
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
const TitlepProductsSection: React.FC = () => {
    return (
        <Grid container direction="column" display="flex" justifyContent="center" alignItems="center" textAlign="center">
            <Grid item>
                <Typography variant="h3" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 'bold', fontSize:"3rem"}}>Prodotti</Typography>
                <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 'lighter',fontSize:"1rem"}}>Scopri i nostri prodotti per categoria</Typography>
            </Grid>
        </Grid>
    );
};

function NewItemInFilter() {
    return (
        <Box sx={{ width: '100%', borderColor: 'primary.main', p: 2, padding: '15px' }}>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Button
                        variant="text"
                        sx={{color: "black",fontWeight:"light", fontFamily: 'Inter, sans-serif', borderRadius:'0', fontSize: '0.800rem', '&:hover': {backgroundColor: '#8CB29C',},}}>
                        Secadora
                    </Button>
                </Grid>
                <Grid item md={8}>
                    <Box sx={{ height: 3, backgroundColor: "#8CB29C" }} />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
                <Button
                    variant="text"
                    sx={{color: "black",fontFamily: 'Inter, sans-serif',fontWeight:"regular", fontSize: '0.650rem', '&:hover': {backgroundColor: '#8CB29C',},}}>
                    Secadora
                </Button>
                <Button
                    variant="text"
                    sx={{color: "black",fontFamily: 'Inter, sans-serif',fontWeight:"regular", fontSize: '0.650rem', '&:hover': {backgroundColor: '#8CB29C',},}}>
                    Secadora
                </Button>
                <Button
                    variant="text"
                    sx={{color: "black",fontFamily: 'Inter, sans-serif',fontWeight:"regular", fontSize: '0.650rem', '&:hover': {backgroundColor: '#8CB29C',},}}>
                    Secadora
                </Button>
            </Box>
        </Box>
    );
}


const ShowProducts: React.FC = () => {
    return(
        <Grid container>
            <Grid item md={4} xs={12} sx={{padding: "5%", width:"50%",height:"10%"}}>
                <ProductCardInFilter imageUrl={''} title={'Product title'} description={'some description'}/>
            </Grid>
            <Grid item md={4} xs={12} sx={{padding: "5%", width:"50%",height:"10%"}}>
                <ProductCardInFilter imageUrl={''} title={'Product title'} description={'some description'}/>
            </Grid>
            <Grid item md={4} xs={12} sx={{padding: "5%", width:"50%",height:"10%"}}>
                <ProductCardInFilter imageUrl={''} title={'Product title'} description={'some description'}/>
            </Grid>
        </Grid>
    )
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
                <Grid item md={3} xs={3}  sx={{height: isXS ? "250vh":"150vh", borderRight: "2.5px solid #8CB29C"}}>
                    <TitleFilter/>
                    <GreenBarSection/>
                    <NewItemInFilter/>
                    <NewItemInFilter/>
                    <NewItemInFilter/>
                </Grid>
                <Grid item md={9} xs={9}  sx={{height:"60vh"}}>
                    <TitlepProductsSection/>
                    <ShowProducts/>
                    <ShowProducts/>
                    <ShowProducts/>
                </Grid>
            </Grid>
            <Footer/>
        </Box>
    );
};

export default Products;