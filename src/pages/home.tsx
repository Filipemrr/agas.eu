import React from 'react';
import ButtonAppBar from "../components/toolbar/toolbar";
import banner from "../images/banner.jpg";
import { Grid, Typography } from "@mui/material";
import "./style.css"; // Importando o arquivo CSS

const Home: React.FC = () => {
    return (
        <Grid container style={{ position: 'relative' }}>
            <ButtonAppBar />
            <img
                src={banner}
                alt="imagem do banner"
                className="banner-img"
            />
            <Typography variant="h2" className="main-title" sx={{fontFamily: 'Inter, sans-serif', fontWeight: 'bold',}}>
                Pulizia senza sforzo <br />
                eleganza senza limiti.

                <Typography variant="subtitle1" className="subtitle" sx={{fontFamily: 'Inter, sans-serif', fontWeight: 'normal',}}>
                    Innovazione e Qualità, Elevarono lo Standard della Tua Esperienza. </Typography>
            </Typography>
        </Grid>
    );
}

export default Home;
