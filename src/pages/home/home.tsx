import ToolbarComponent from "../../components/toolbar/toolbar";
import {Grid, SvgIcon, Typography, useMediaQuery} from "@mui/material";
import "./style.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import ProductCard from "../../components/ProductsCard/ProductCard";
import BannerAndTittle from "../../components/Banner/BannerAndTittle";
import React from "react";
import SponsorCard from "../../components/SponsorCard/SponsorCard";
import Navbar from "../../components/navbar/toolbar";
import Footer from "../../components/Footer/FooterPage"
import FeedbackCardSwiper from "../../components/Swipper/Swipper";
import HeroLeft02 from "../../components/OneProductAd/OneProductAd";
import Box from '@mui/material/Box';
import DiamondIcon from '@mui/icons-material/Diamond';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupportIcon from '@mui/icons-material/Support';
import { products, sponsors} from '../../data/productsData';

interface AddCardsProps {
    CardType: string;
}

interface BenefitCardProps {
    imageUrl: string;
    title: string;
    description: string;
}


const BenefitCard: React.FC<BenefitCardProps> = () => {
    return (
        <Grid container spacing={5} justifyContent="center">
            <Grid item>
                <Card sx={{ maxWidth: 345, marginTop: "15%", backgroundColor: "white"}}>
                    <CardMedia
                        sx={{ display:"flex", alignItems: "center", justifyContent:"center", height:150, backgroundColor:"#D4D4D4"}}
                        title= "Titulo"
                    >
                        <SvgIcon component={DiamondIcon} sx={{ fontSize: '5rem', mb: 0.5 }} /></CardMedia>
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div" textAlign="center">
                            Qualità
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="center">
                        Selezioniamo ed offriamo ai nostri clienti solo prodotti ed apparecchiature di alta qualità, certificati e costruiti in Italia.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item>
                <Card sx={{ maxWidth: 345, marginTop: "15%" }}>
                    <CardMedia
                        sx={{ display:"flex", alignItems: "center", justifyContent:"center", height:150, backgroundColor:"#D4D4D4"}}
                        title= "Titulo"
                    >
                        <SvgIcon component={AttachMoneyIcon} sx={{ fontSize: '5rem', mb: 0.5 }} /></CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign="center">
                            Prezzo
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="center">
                        Facciamo il possibile per offrire le nostre soluzioni a prezzi equi e con modalità trasparenti. Puntiamo a raggiungere sempre il miglior rapporto qualità/prezzo.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item>
                <Card sx={{ maxWidth: 345, marginTop: "15%" }}>
                    <CardMedia
                        sx={{ display:"flex", alignItems: "center", justifyContent:"center", height:150, backgroundColor:"#D4D4D4"}}
                        title= "Titulo"
                    >
                        <SvgIcon component={SupportIcon} sx={{ fontSize: '5rem', mb: 0.5 }} /></CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign="center">
                            Assistenza Clienti
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="center">
                        Il nostro servizio clienti è efficiente ed attento alle esigenze del cliente. Forniamo assistenza in modo puntuale e tempestivo.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    );
}

const AddCards: React.FC<AddCardsProps> = ({CardType }) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const cards = CardType === 'products' ? products : sponsors;

    return (
        <Grid item md={8} xs={12} sx={{ paddingTop: isSmallScreen ? "10%" : "2%" }}>
            <Grid container className={"cardsRow"} spacing={3}>
                {cards.map((card, index) => (
                    <Grid item key={index}>
                        {CardType !== 'sponsors' && 'isMain' in card && !card.isMain ? (
                            <ProductCard
                                imageUrl={card.imageUrl}
                                title={card.title}
                                description={card.description}
                            />
                        ) : CardType === 'sponsors' ? (
                            <SponsorCard
                                imageUrl={card.imageUrl}
                                title={card.title}
                                description={card.description}
                            />
                        ) : null}
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
              sx={{paddingTop: isSmallScreen ? "5%" : "2%", display: "flex", alignItems: "center"}} md={12} xs={9}>
            <Grid item xs={10}>
            
             <Grid item xs={12} sx={{width: isSmallScreen ? "40vh": "100vh", height:"100%", paddingTop: isSmallScreen ? "5%" : "2%" }}>
                 <FeedbackCardSwiper/>
             </Grid>
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
        <Grid item md={2} xs={4} className="tittle-Section-Two">
            <Grid container className="tittle-Section-Container">
            <Typography
    variant="h1"
    className="title-Nostri"
    sx={{
      width: '100%',
      // Apply font sizes for specific breakpoints
      fontSize: {
        xs: '1rem', 
        sm: '2rem',
        md: '3rem',  
      },
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
    }}>Perchè scegliere aGas</Typography>
                <Typography variant="subtitle1" sx={{ marginTop: "2%", fontFamily: 'Inter, sans-serif', textAlign: 'center', width: '40%', fontWeight: 300}}>Con noi aiuterai l’ambiente eliminando bottiglie di plastica, prodotti chimici e risparmiando denaro. Per te una gamma completa di Purificatori per l’acqua e per l’aria, Sistemi Anti-calcare, Sistemi di Pulizia a Vapore e ad Ozono.</Typography>
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
                La voce dei nostri Clienti
            </Typography>
        </Grid>
    )
}

const TittleSectionProducts: React.FC = () => {
    return(
        <Grid item md={2} xs={4} className="tittle-Section-Two">
            <Grid container className="tittle-Section-Container">
                <Typography variant="h1" className={"tittle-Nostri"} style={{width: '100%', fontSize: '3rem', fontFamily: 'Inter, sans-serif', marginBottom: 25, fontWeight: 600}}>Ecco di cosa ci occupiamo</Typography>
                <Typography variant="subtitle1" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 300}}>Questi sono i nostri settori di competenza, approfondisci quello di Tuo interesse e richiedi liberamente altre informazioni</Typography>
            </Grid>
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
            <Grid item direction="column" marginTop="5%">
            <TittleSectionTwo/>
                <Grid container justifyContent="center" spacing={4}> 
                    <Grid item> 
                    <BenefitCard imageUrl={''} title={"Qualità"} description={"Selezioniamo ed offriamo ai nostri clienti solo prodotti ed apparecchiature di alta qualità, certificati e costruiti in Italia."} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        <Grid item xs={12} className="sectionProducts" direction="column">
            <Grid item direction="column" marginTop="5%">
                <TittleSectionProducts/>
                <AddCards CardType="products"/>
            </Grid>
        </Grid>


        <Grid item xs={12} className="sectionThree" direction="column">
            <BannerAndTittle
                tittleComponent={<TittleSectionThree/>}
                content={<AddCards CardType="sponsors"/>}
            />
            {isXS && <BannerAndTittle/>}
        </Grid>
        <Grid item md={8} xs={12} className="sectionFour" direction="column">
            <TittleSectionFour/>
            <AddFeedback/>
        </Grid>
        
        <Grid item md={8} xs={12} className="sectionFour" direction="column">
            <HeroLeft02/>
        </Grid>
        <Footer/>
    </Grid>
    );
}

export default Home;
