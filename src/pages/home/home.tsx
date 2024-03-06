import ToolbarComponent from "../../components/toolbar/toolbar";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import "./style.css";
import ProductCard from "../../components/ProductsCard/ProductCard";
import BannerAndTittle from "../../components/Banner/BannerAndTittle";
import React from "react";
import SponsorCard from "../../components/SponsorCard/SponsorCard";
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";
import Navbar from "../../components/navbar/toolbar";
import Footer from "../../components/Footer/FooterPage"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // for Swiper's basic CSS
import 'swiper/css/navigation'; // if you're using the navigation module
import 'swiper/css/pagination'; // if you're using the pagination module


interface Product {
    type: string;
    title: string;
    description: string;
    imageUrl: string;
}
interface AddCardsProps {
    CardType: string;
}


const products: Product[] = [
    {
        type: "product",
        title: "Produto 1",
        description: "Descrição do produto 1",
        imageUrl: "./images/Maytag-logo.png"
    },
    {
        type: "product",
        title: "Produto 2",
        description: "Descrição do produto 2",
        imageUrl: "./images/logo.png"
    },
    {
        type: "product",
        title: "Produto 3",
        description: "Descrição do produto 3",
        imageUrl: "./images/logo.png"
    },
    {
        type: "sponsor",
        title: "Distributore Autorizzato MYTAG",
        description: "La Maytag Corporation è un'azienda americana che produce" +
            " e commercializza elettrodomestici per la casa e commerciali. " +
            "La Maytag Washing Machine Company è stata fondata nel 1893 dall'imprenditore Frederick Maytag\n" + "\n" +
            "I prodotti dell'azienda \"Agas\" sono distribuiti con autorizzazione ufficiale da MYTAG. " +
            "Garantiamo qualità e affidabilità come distributore autorizzato. " +
            "Scegliete sicurezza ed eccellenza con i prodotti \"Agas\".",
        imageUrl: "./images/logo.png"
    },
    {
        type: "sponsor",
        title: "Distributore Autorizzato Whirlpool",
        description: "La Whirlpool Corporation è un produttore e marketer " +
            "multinazionale americano di elettrodomestici per la casa.I " +
            "prodotti dell'azienda 'Agas' sono distribuiti con autorizzazione " +
            "ufficiale da Whirlpool. Garantiamo qualità e affidabilità come " +
            "distributore autorizzato. Scegliete sicurezza ed eccellenza con i " +
            "prodotti 'Agas'.",
        imageUrl: "./images/logo.png"
    },
    {
        type: "sponsor",
        title: "Distributore Autorizzato American Dryer corp.",
        description: "La American Dryer Corporation, o ADC, è leader nell'asciugatura industriale grazie alla loro innovazione e design guidato dagli ingegneri. I prodotti 'Agas' sono distribuiti con autorizzazione ufficiale da American Dryer Corp, garantendo qualità e affidabilità come distributore autorizzato. Scegliete sicurezza ed eccellenza con i prodotti 'Agas'.",
        imageUrl: "./images/logo.png"
    }
];



const AddCards: React.FC<AddCardsProps> = ({CardType }) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Grid item md={8} xs={12} sx={{ paddingTop: isSmallScreen ? "10%" : "2%" }}>
            <Grid container className={"cardsRow"} spacing={3}>
                {products.filter(product => product.type === CardType).map((product: Product, index: number) => (
                    <Grid item key={index}>
                        {CardType === "sponsor" ? (
                            <SponsorCard
                                imageUrl={product.imageUrl}
                                title={product.title}
                                description={product.description}
                            />
                        ) : (
                            <ProductCard
                                imageUrl={product.imageUrl}
                                title={product.title}
                                description={product.description}
                            />
                        )}
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

const AddFeedback: React.FC = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <Grid container direction="column"
              sx={{paddingTop: isSmallScreen ? "10%" : "2%", display: "flex", alignItems: "center"}} md={12} xs={9}>
            <Grid item xs={10}>
                <Typography color="#3F874E" variant="subtitle1" fontWeight="bold"
                            sx={{fontSize: isSmallScreen ? "4.5vw" : "1vw", marginBottom: -1}}>
                    Patrick. S
                </Typography>
                <Typography color="#8D8E90" variant="caption" fontWeight="light">
                    La uso per tutto
                </Typography>
            </Grid>
        </Grid>
    );

}
const TittleSectionOne: React.FC = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h2" fontWeight="bold" style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'bold',
                textAlign: 'center',
                color: "#FFFFFF",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
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
    const isXS = useMediaQuery('(max-width:600px)');
    return (
        <Grid container className="tittle-Section-Container">
            <Typography variant="h2" style={{paddingTop: isXS ? "10%": "0%", width: '100%',color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontWeight: 'bold'}}>iI nostri partner...</Typography>
            <Typography variant="subtitle1" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 'light', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>Gli articoli più venduti della nostra collezione </Typography>
        </Grid>
    )
}
const TittleSectionFour: React.FC = () => {
    return(
        <Grid item md={1} xs={12}>
            <Typography variant="h2" style={{ paddingTop: "3%", fontFamily: 'Inter, sans-serif', fontWeight: 'bold', textAlign: 'center', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Opinioni dei clienti
            </Typography>
        </Grid>
    )
}

const Home: React.FC = () => {
    const isXS = useMediaQuery('(max-width:600px)');
    return (
        <Grid container direction="column">
            <Grid item>
                <ToolbarComponent/>
                <Navbar/>
                <BannerAndTittle tittleComponent={<TittleSectionOne/>}/>
            </Grid>
            <Grid item xs={12} className="sectionTwo" direction="column">
                <TittleSectionTwo/>
                <AddCards CardType="product"/>
            </Grid>
            <Grid item xs={12} className="sectionThree" direction="column">
                <BannerAndTittle
                    tittleComponent={<TittleSectionThree/>}
                    content={<AddCards CardType="sponsor"/>}
                />
                {isXS && <BannerAndTittle/>}
            </Grid>
            <Grid item md={8} xs={12} className="sectionFour" direction="column">
                <TittleSectionFour/>
                <AddFeedback/>
            </Grid>
            <Footer/>
        </Grid>
    );
}

export default Home;
