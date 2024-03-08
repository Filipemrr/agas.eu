import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './style.css';
import {useMediaQuery} from "@mui/material";
interface ProductCardProps {
    imageUrl: string;
    title: string;
    description: string;
}



const SponsorCard: React.FC<ProductCardProps> = ({ imageUrl, title, description }) => {
    const isXS = useMediaQuery('(max-width:600px)');
    return (
        <Card sx={{ backgroundColor:"#CFCBCB", height:380, maxHeight:770, minWidth: 60, maxWidth: isXS ? 250: 310, border:"1px solid #2D2F36", marginTop: isXS? "7%":"2%", borderRadius:"18px"}}>
            <CardMedia
                sx={{
                    height: '20%',
                    width: 'auto', // Ensure you correct the typo here from 'widht' to 'width'
                    maxHeight: 300,
                    backgroundColor: "#CFCBCB",
                    backgroundSize: 'contain', // or 'cover', '100%', etc.
                    backgroundPosition: 'center', // Centers the background image
                }}
                image={imageUrl}
                title={title}
            />
            <CardContent className={"Sponsor-cardContent"} sx={{ height:260 }}>
                <Typography gutterBottom variant="h6" component="div" color="#042036" sx={{fontSize:isXS ? "14px": "14px", fontFamily: "Alegreya SC, sans-serif", fontWeight:"bold"}}>
                    {title}
                </Typography>
                <Typography variant="body2" color={"000000"} sx={{fontSize:isXS ? "12px": "14px", fontFamily: "Alegreya SC, sans-serif", fontWeight:"light"}}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default SponsorCard;
