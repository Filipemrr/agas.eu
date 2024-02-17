import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
        <Card sx={{ minWidth: 250, maxWidth: 400, border:"1px solid #2D2F36", marginTop: isXS? "7%":"3%"}}>
            <CardMedia
                sx={{ height:240, backgroundColor:"#CFCBCB"}}
                image= {imageUrl}
                title= {title}
            />
            <CardContent className={"cardContent"} sx={{ height:260 }}>
                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                    {title}
                </Typography>
                <Typography variant="body2" color={"white"}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default SponsorCard;
