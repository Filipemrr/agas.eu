import * as React from 'react';
import {Grid, Typography} from "@mui/material";
import Navbar from "../../components/navbar/toolbar";
import ToolbarComponent from "../../components/toolbar/toolbar";
import "./style.css";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import FooterPage from "../../components/Footer/FooterPage";




const TitleSectionOne: React.FC = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h2" fontWeight="bold" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', textAlign: 'center', color: 'white', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Chi Siamo
            </Typography>
        </Grid>
    );
}

const TitleSectionTwo: React.FC = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h2" style={{ fontFamily: 'Inter, sans-serif', marginTop: '6%', marginLeft: '10%', fontSize: '18px', textAlign: 'left', color: 'black' }}>
            <span style={{ fontWeight: 'bold' }}>aGas</span> è l'unico importatore e distributore diretto di asciugatrici e lavatrici dei marchi americani Maytag e Whirpool ed altri marchi. <br/>
            <br/>
            aGas commercializza altri prodotti/accessori tra cui le salviette ammorbidenti, antistatiche e profumate, detersivi per il bucato ideali ad uso Professionale e domestico.<br/><br/>

            aGas propone i prezzi migliori per le asciugatrici a gas, elettriche e lavatrici ed altri prodotti in quanto importa e distribuisce direttamente dal produttore e saltando i costi di distribuzione e di pubblicità del prodotto, può offrire al consumatore dei prezzi estremamente competitivi senza dover cedere niente alla qualità dei prodotti ed al servizio assistenza garantito dal più grande e dal più competente centro assistenza di asciugatrici a gas italiano.<br/><br/>

            I macchinari per lavanderie, Maytag, Whirlpool, General Elettric, ADC, Alliance, hanno caratteristiche differenti, puoi scoprire nella sezione prodotti alcuni modelli di asciugatrici a gas disponibili, distribuiti dall'azienda  aGas in Italia ed Europa. 
            </Typography>
        </Grid>
    );
}

const AboutUs: React.FC = () => {
    return (
        <Grid container direction="column">
            <Grid item>
                <ToolbarComponent/>
                <Navbar />
                <InfoBanner tittleComponent={<TitleSectionOne/>}/>
            </Grid>
            <Grid item xs={12} className="sectionTwo" direction="column">
                <TitleSectionTwo/>
            </Grid>
            <FooterPage/>
        </Grid>
    );
}
export default AboutUs;