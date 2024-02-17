import ToolbarComponent from "../../components/toolbar/toolbar";

import {Grid, Typography, useMediaQuery} from "@mui/material";

import "./style.css";
import ProductCard from "../../components/ProductsCard/ProductCard";
import BannerAndTittle from "../../components/Banner/BannerAndTittle";
import React from "react";
import SponsorCard from "../../components/SponsorCard/SponsorCard";

interface Product {
    title: string;
    description: string;
    imageUrl: string;
}


const products: Product[] = [
    {
        title: "Produto 1",
        description: "Descrição do produto 1",
        imageUrl: "./images/logo.png"
    },
    {
        title: "Produto 2",
        description: "Descrição do produto 2",
        imageUrl: "./images/logo.png"
    },
    {
        title: "Produto 3",
        description: "Descrição do produto 3",
        imageUrl: "./images/logo.png"
    }
];

const AddCards: React.FC = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return(
        <Grid item md={8} xs={12} sx={{paddingTop: isSmallScreen ? "10%": "2%"}} >
            <Grid container className={"cardsRow"} spacing={5}>
                {products.map((product: Product, index:number) => (
                    <Grid item key={index}>
                        <ProductCard
                            title={product.title}
                            description={product.description}
                            imageUrl={product.imageUrl}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

const TittleSectionOne: React.FC = () => {
    return(
        <Grid item xs={12}>
            <Typography variant="h2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', textAlign: 'center', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Pulizia senza sforzo <br />
                eleganza senza limiti.
            </Typography>
            <Typography variant="subtitle1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'normal', textAlign: 'center', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", padding: "10px" }}>
                Innovazione e Qualità, Elevarono lo Standard della Tua Esperienza.
            </Typography>
        </Grid>
    )
}
const TittleSectionTwo: React.FC = () => {
    return(
        <Grid item md={2} xs={4} className="tittle-Section-Two" sx={{marginTop:"8%"}}>
            <Grid container className="tittle-Section-Container">
                <Typography variant="h1" className={"tittle-Nostri"} style={{width: '100%'}}>I Nostri Prodotti</Typography>
                <Typography variant="subtitle1" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 'light'}}>Gli articoli più venduti della nostra collezione </Typography>
            </Grid>
        </Grid>
    )
}
const TittleSectionThree: React.FC = () => {
    return (
        <Grid container className="tittle-Section-Container">
            <Typography variant="h2" style={{width: '100%',color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontWeight: 'bold'}}>iI nostri partner...</Typography>
            <Typography variant="subtitle1" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 'light', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>Gli articoli più venduti della nostra collezione </Typography>
        </Grid>
    )
}

const AddingSponsorCard: React.FC = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return(
        <Grid item md={8} xs={12} sx={{paddingTop: isSmallScreen ? "10%": "2%"}} >
            <Grid container className={"cardsRow"} spacing={5}>
                {products.map((product: Product, index:number) => (
                    <Grid item key={index}>
                        <SponsorCard
                            title={product.title}
                            description={product.description}
                            imageUrl={product.imageUrl}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}


const Home: React.FC = () => {
    return (
            <Grid container direction="column">
                <Grid item>
                    <ToolbarComponent/>
                    <BannerAndTittle tittleComponent={<TittleSectionOne/>}/>
                </Grid>
                <Grid item xs={12} className="sectionTwo" direction="column">
                    <TittleSectionTwo/>
                    <AddCards/>
                </Grid>
                <Grid item xs={12} className="sectionThree" direction="column">
                    <BannerAndTittle tittleComponent={<TittleSectionThree/>} content={<SponsorCard title={"Sponsor 1"} description={"Description 1"} imageUrl={""}/>}/>

                </Grid>
            </Grid>
    );
}


export default Home;
