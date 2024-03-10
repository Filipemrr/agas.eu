import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './style.css';
interface ProductCardProps {
    imageUrl: string;
    title: string;
    description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, description }) => {
    return (
        <Card sx={{ maxWidth: 300, border: "1px solid #2D2F36" }}>
            <Box
                sx={{
                height: 260, // Height of the container
                backgroundSize: 'contain', // Makes the image fit within the container, adjust as needed
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: "#CFCBCB",
                backgroundImage: `url(${imageUrl})`
                }}
            />
            <CardContent className={"cardContent"} sx={{ height:260 }}>
                <Typography gutterBottom variant="h5" component="div" color={"white"} textAlign={"center"}>
                    {title}
                </Typography>
                <Typography variant="body2" color={"white"} textAlign={"center"}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ProductCard;