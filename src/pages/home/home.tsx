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


interface Product {
    type: string;
    title: string;
    description: string;
    imageUrl: string;
}

interface AddCardsProps {
    CardType: string;
}

interface BenefitCardProps {
    imageUrl: string;
    title: string;
    description: string;
}

const products: Product[] = [
    {
        type: "product",
        title: "Lavatrice",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici maytag",
        imageUrl: "./images/Maytag-logo.png"
    },
    {
        type: "product",
        title: "Asciugatrice",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici whirpool",
        imageUrl: "./images/logo.png"
    },
    {
        type: "product",
        title: "Detersivi",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici ADC",
        imageUrl: "./images/logo.png"
    },
    {
        type: "product",
        title: "Tubo Anticalcare",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici ADC",
        imageUrl: "./images/logo.png"
    },
    {
        type: "sponsor",
        title: "Distributore Autorizzato MAYTAG",
        description: "La Maytag Corporation è un'azienda americana che produce" +
            " e commercializza elettrodomestici per la casa e commerciali. " +
            "La Maytag Washing Machine Company è stata fondata nel 1893 dall'imprenditore Frederick Maytag\n" + "\n" +
            "I prodotti dell'azienda \"Agas\" sono distribuiti con autorizzazione ufficiale da MYTAG. " +
            "Garantiamo qualità e affidabilità come distributore autorizzato. " +
            "Scegliete sicurezza ed eccellenza con i prodotti \"Agas\".",
        imageUrl: "https://cdn.discordapp.com/attachments/1017600421335937104/1215490580944134194/Maytag-logo.png?ex=65fcf0d1&is=65ea7bd1&hm=cca1b142e9b4acaa52d1f25b8eb7add9aa95d01d1a02715fec81b394b1f9afc9&"
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
        imageUrl: "https://cdn.discordapp.com/attachments/1017600421335937104/1215494786618753044/png-clipart-whirlpool-corporation-home-appliance-washing-machines-brand-maytag-others-thumbnail-removebg-preview.png?ex=65fcf4bb&is=65ea7fbb&hm=b5ff35b83c0e2441d562820c72a9a6dc42b167580e16c2ccab3125bbd2ceeeff&"
    },
    {
        type: "sponsor",
        title: "Distributore Autorizzato American Dryer corp.",
        description: "La American Dryer Corporation, o ADC, è leader nell'asciugatura industriale grazie alla loro innovazione e design guidato dagli ingegneri. I prodotti 'Agas' sono distribuiti con autorizzazione ufficiale da American Dryer Corp, garantendo qualità e affidabilità come distributore autorizzato. Scegliete sicurezza ed eccellenza con i prodotti 'Agas'.",
        imageUrl: "https://media.discordapp.net/attachments/1017600421335937104/1215490579560144936/adc-logo.png?ex=65fcf0d0&is=65ea7bd0&hm=55dbd415e5d050ea1ad72465444cf1c769b68a2dc426f3459e215a967e254577&=&format=webp&quality=lossless&width=230&height=174"
    }
];



const BenefitCard: React.FC<BenefitCardProps> = () => {
    return (
        <Grid container spacing={5}>
            <Grid item>
                <Card sx={{ maxWidth: 345, marginTop: "15%", backgroundColor: "white"}}>
                    <CardMedia
                        sx={{ display:"flex", alignItems: "center", justifyContent:"center", height:150, backgroundColor:"#CFCBCB"}}
                        title= "Titulo"
                    >
                        <SvgIcon component={DiamondIcon} sx={{ fontSize: '5rem', mb: 0.5 }} /></CardMedia>
                    <CardContent>
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
                        sx={{ display:"flex", alignItems: "center", justifyContent:"center", height:150, backgroundColor:"#CFCBCB"}}
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
                        sx={{ display:"flex", alignItems: "center", justifyContent:"center", height:150, backgroundColor:"#CFCBCB"}}
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
                <Typography variant="h1" className={"tittle-Nostri"} style={{width: '100%', fontSize: '3rem', fontFamily: 'Inter, sans-serif', fontWeight: 600}}>Perchè scegliere aGas</Typography>
                <Typography variant="subtitle1" sx={{ marginTop: "2%", fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 300}}>Con noi aiuterai l’ambiente eliminando bottiglie di plastica, prodotti chimici e risparmiando denaro.<br></br> Per te una gamma completa di Purificatori per l’acqua e per l’aria, Sistemi Anti-calcare, Sistemi di <br></br>Pulizia a Vapore e ad Ozono.</Typography>
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
                <AddCards CardType="product"/>
            </Grid>
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
        
        <Grid item md={8} xs={12} className="sectionFour" direction="column">
            <HeroLeft02/>
        </Grid>
        <Footer/>
    </Grid>
    );
}

export default Home;
