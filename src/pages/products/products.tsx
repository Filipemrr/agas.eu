import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import Footer from "../../components/Footer/FooterPage"
import Toolbar from "../../components/toolbar/toolbar";
import './style.css';
import ToolbarComponent from "../../components/toolbar/toolbar";
import Navbar from "../../components/navbar/toolbar";
import InfoBanner from "../../components/InfoBanner/InfoBanner";

const TitleSectionOne: React.FC = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h2" fontWeight="bold" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', textAlign: 'center', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Nostri Prodotti
            </Typography>
        </Grid>
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
                <Grid item md={3} xs={8}  sx={{height:"60vh", borderRight: "2.5px solid #8CB29C"}}>
                </Grid>
                <Grid item md={9} xs={8}  sx={{height:"60vh"}}>
                </Grid>
            </Grid>
            <Footer/>
        </Box>
    );
};

export default Products;