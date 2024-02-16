import React from 'react';
import ToolbarComponent from "../../components/toolbar/toolbar";
import banner from "../../images/banner.jpg";
import {Grid, Typography} from "@mui/material";
import logo from '../../images/logo.png'
import "./style.css";
import ProductCard from "../../components/ProductsCard/ProductCard";

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
    return(
        <Grid item md={8} xs={12}>
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
const TittleSectionTwo: React.FC = () => {
    return(
        <Grid item md={2.5} xs={4} className="tittle-Section-Two" sx={{marginTop:"10%"}}>
            <Grid container className="tittle-Section-Container">
                <Typography variant="h1" className={"tittle-Nostri"} style={{width: '100%' }}>I Nostri Prodotti</Typography>
                <Typography variant="subtitle1" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 'light'}}>Gli articoli più venduti della nostra collezione </Typography>
            </Grid>
        </Grid>
    )
}
const BannerAndTitle: React.FC = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: "90vh", backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <img
                    src={logo}
                    alt="logo"
                    className="logo-img"
                    style={{marginTop:"4.5%"}}
                />
                <Typography variant="h2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', fontSize: "{ xs: 0.5rem, md: 7rem }", textAlign: 'center', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                    Pulizia senza sforzo <br />
                    eleganza senza limiti.
                </Typography>
                <Typography variant="subtitle1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'normal', fontSize: "{ xs: '0.5rem', md: '1rem' }", textAlign: 'center', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", padding: "20px" }}>
                    Innovazione e Qualità, Elevarono lo Standard della Tua Esperienza.
                </Typography>
            </Grid>
        </Grid>
    )
}


const Home: React.FC = () => {
    return (
            <Grid container direction="column">
                <Grid item>
                    <ToolbarComponent/>
                    <BannerAndTitle/>
                </Grid>
                <Grid item xs={12} className="sectionTwo" direction="column">
                    <TittleSectionTwo/>
                    <AddCards/>
                </Grid>
                <Grid item xs={12} className="sectionTwo" direction="column">
                    <TittleSectionTwo/>
                    <AddCards/>
                </Grid>
            </Grid>
    );
}


export default Home;
