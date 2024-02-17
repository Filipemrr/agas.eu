import React, {useEffect, useState} from 'react';
import ToolbarComponent from "../../components/toolbar/toolbar";
import bannerMd from "../../images/banner.jpg";
import bannerXS from "../../images/XSBanner.jpg";
import {Grid, Typography, useMediaQuery} from "@mui/material";
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
const BannerAndTitle: React.FC = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [banner, setBanner] = useState(bannerMd);
    useEffect(() => {
        function handleResize() {
            if(window.innerWidth < 800) {
                setBanner(bannerXS);
            } else {
                setBanner(bannerMd);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: "90vh", backgroundImage:`url(${banner})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <img
                    src={logo}
                    alt="logo"
                    className="logo-img"
                    style={{marginTop: isSmallScreen ? "13.5%" : "4.5%", marginLeft:"1%"}}
                />
                <Grid item xs={12}>
                    <Typography variant="h2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', textAlign: 'center', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                        Pulizia senza sforzo <br />
                        eleganza senza limiti.
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'normal', textAlign: 'center', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", padding: "10px" }}>
                        Innovazione e Qualità, Elevarono lo Standard della Tua Esperienza.
                    </Typography>
                </Grid>

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
