import React from 'react';
import ButtonAppBar from "../../components/toolbar/toolbar";
import banner from "../../images/banner.jpg";
import {Box, Grid, Typography} from "@mui/material";
import logo from '../../images/logo.png'
import "./style.css";
import ProductCard from "../../components/ProductsCard/ProductCard";

const Home: React.FC = () => {
    return (
        <Grid container direction="column">
            <ButtonAppBar/>
            <Grid item md={12} style={{position: 'relative'}}>
                <img
                    src={banner}
                    alt="imagem do banner"
                    className="banner-img"
                />
                <img
                    src={logo}
                    alt="logo"
                    className="logo-img"
                />
                <Typography variant="h2" className="main-title"
                            sx={{fontFamily: 'Inter, sans-serif', fontWeight: 'bold',}}>
                    Pulizia senza sforzo <br/>
                    eleganza senza limiti.

                    <Typography variant="subtitle1" className="subtitle"
                                sx={{fontFamily: 'Inter, sans-serif', fontWeight: 'normal',}}>
                        Innovazione e Qualità, Elevarono lo Standard della Tua Esperienza. </Typography>
                </Typography>
            </Grid>
            <Grid container className="sectionTwo" direction="column" >
                <Grid container direction="column" sx={{display:'flex', alignItems:"center", justifyContent:"center"}}>
                    <Typography variant="h1">I Nostri Prodotti</Typography>
                    <Typography variant="subtitle1" sx={{fontFamily: 'Inter, sans-serif', fontWeight: 'light',}}>Gli articoli più venduti della nostra collezione </Typography>
                </Grid>
                    <Grid item md={8} xs={12} sx={{border: "1px solid red"}}>
                    <Grid container className={"cardsRow"} spacing={5}>
                        <Grid item >
                            <ProductCard title="prodotti 1" description="descricao do produto 1" imageUrl={logo} />
                        </Grid>
                        <Grid item>
                            <ProductCard title="prodotti 2" description="descricao do produto 2" imageUrl={logo} />
                        </Grid>
                        <Grid item>
                            <ProductCard title="prodotti 3" description="descricao do produto 3" imageUrl={logo} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default Home;
