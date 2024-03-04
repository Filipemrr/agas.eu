import * as React from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import {Grid, Typography} from "@mui/material";
import BannerAndTittle from "../../components/Banner/BannerAndTittle";
import Navbar from "../../components/navbar/toolbar";
import ToolbarComponent from "../../components/toolbar/toolbar";
import Divider from '@mui/material/Divider';
import "./style.css";
import InfoBanner from "../../components/InfoBanner/InfoBanner";


const TitleSectionOne: React.FC = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h2" fontWeight="bold" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', textAlign: 'center', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Contatti
            </Typography>
        </Grid>
    );
}

const TitleSectionTwo: React.FC = () => {
    return (
        <Grid item xs={12}>

        </Grid>
    );
}

const ContactCard: React.FC = () => {
    return (
        <Grid container className="card-container">
            <Card
                className="card"
                sx={{
                    borderRadius: 7,
                    height: 350,
                    backgroundColor: "#15171F"
                }}
            >
                <CardContent
                    sx={{
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        color: "white",
                        borderLeft: "1px solid #2EA360",
                        backgroundColor: "white"
                    }}>
                    <Grid container spacing={2} justifyContent="flex-start">
                        <Grid item xs={12} md={4}>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography variant="h5" component="div">
                                aGAS by V&F
                            </Typography>
                            <Typography variant="body1" component="div">
                                Sede Operative: Vicenza
                            </Typography>
                            <Typography variant="body1" component="div">
                                Tel: +39
                            </Typography>
                            <Typography variant="body1" component="div">
                                Email: info@vastfast.it
                            </Typography>
                            <Typography variant="body1" component="div">
                                P.IVA 034
                            </Typography>
                            <Typography variant="body1" component="div">
                                CCIAA di Vicenza
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}

const Contatti: React.FC = () => {
    return (
        <Grid container direction="column">
            <Grid item>
                <ToolbarComponent/>
                <Navbar />
                <InfoBanner tittleComponent={<TitleSectionOne/>}/>
            </Grid>
            <Grid item xs={12} className="sectionTwo" direction="column">
                <TitleSectionTwo/>
                <ContactCard />
            </Grid>
        </Grid>
    );
}
export default Contatti;