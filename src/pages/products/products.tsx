import React, {useState} from "react";
import {Box, Grid, Typography, useMediaQuery,  SvgIcon, Button} from "@mui/material";
import Footer from "../../components/Footer/FooterPage"
import Toolbar from "../../components/toolbar/toolbar";
import './style.css';
import ToolbarComponent from "../../components/toolbar/toolbar";
import Navbar from "../../components/navbar/toolbar";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SecurityIcon from '@mui/icons-material/Security';
import ProductCardInFilter from "../../components/ProductInFilter/ProductCardInFilter";
import {products} from '../../data/productsData';
const backGroundSize = 150;


interface ListProductsPropos {
    type: string;
}

const TitleSectionOne: React.FC = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h2" fontWeight="bold" style={{fontFamily: 'Inter, sans-serif', fontWeight: 'bold', textAlign: 'center', color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Nostri Prodotti
            </Typography>
        </Grid>
    );
}
const TitleFilter: React.FC = () => {
    return (
        <Grid container direction="column" display="flex" justifyContent="center" alignItems="center" textAlign="center" sx={{height: "9vh"}}>
            <Grid item>
                <Typography variant="h3" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 'bold', fontSize:"30px"}}>Categorie</Typography>
                <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 'lighter',fontSize:"9px"}}>SELEZIONA LA CATEGORIA DI TUO INTERESSE PER VISUALIZZARE I PRODOTTI.</Typography>
            </Grid>
        </Grid>
    );
};
const GreenBarSection: React.FC = () => {
        return (
            <Box sx={{ width: '100%', backgroundColor: '#8CB29C', color: 'white', height:"6vh",display: 'flex', alignItems: 'center'}}>
                <Grid container justifyContent="space-around" alignItems="center" sx={{ p: 1 }}>
                    <Grid item>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.8rem' }}>
                            <SvgIcon component={LocalShippingIcon} sx={{ fontSize: '1.5rem', mb: 0.5 }} />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.8rem' }}>
                            <SvgIcon component={HeadsetMicIcon} sx={{ fontSize: '1.5rem', mb: 0.5 }} />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.8rem' }}>
                            <SvgIcon component={SecurityIcon} sx={{ fontSize: '1.5rem', mb: 0.5 }} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        );
    };
const TitlepProductsSection: React.FC = () => {
    return (
        <Grid container direction="column" display="flex" justifyContent="center" alignItems="center" textAlign="center" sx={{height: "9vh"}}>
            <Grid item sx={{paddingBottom:"5%"}}>
                <Typography variant="h3" sx={{fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 'bold', fontSize:"3rem"}}>Prodotti</Typography>
                <Typography variant="subtitle2" sx={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', fontWeight: 'lighter',fontSize:"1rem"}}>Scopri i nostri prodotti per categoria</Typography>
            </Grid>
        </Grid>
    );
};

function AllProductsSideBar() {
    // Armazenando todos os tipos únicos.
    let types : string[] = [];
    products.forEach(product => {
        if (!types.includes(product.type)) {
            types.push(product.type);
        }});

    const [selectedType, setSelectedType] = useState<string>('All');
    const handleButtonClick = (label: string) => {
        setSelectedType(label);
    };

    return (
        <div>
            {types.map(type => (
                <React.Fragment key={type}>
                    <Box sx={{ width: '100%', borderColor: 'primary.main', p: 1, mt: 2 }}>
                        <Grid container alignItems="center" justifyContent="center">
                            <Grid item md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: "black",
                                        fontWeight: "bold",
                                        fontFamily: 'Inter, sans-serif',
                                        borderRadius: '0',
                                        fontSize: '0.800rem',
                                        '&:hover': { backgroundColor: '#8CB29C', },

                                    }}
                                >
                                    {type}
                                </Button>
                            </Grid>
                            <Grid item md={8}>
                                <Box sx={{ height: 3, backgroundColor: "#8CB29C" }} />
                            </Grid>
                        </Grid>
                    </Box>
                    {/* Aqui renderizamos todos os produtos desse tipo */}
                    {products.filter(product => product.type === type).map(product => (
                        <Box key={product.id} sx={{ width: '100%', borderColor: 'primary.main', p: 0.4}}>
                            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: "black",
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: "regular",
                                        fontSize: '0.650rem',
                                        '&:hover': { backgroundColor: '#8CB29C', },
                                    }}
                                >
                                    {product.title}
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}


const ListProducts: React.FC<ListProductsPropos> = ({ type }) => {
    const filteredProducts = type === 'All' ? products : products.filter(product => product.type === type);
    return (
        <Grid container sx={{
            display: "flex",
            alignItems: "center",
            height: "50%",
            paddingTop: "5%"
        }}>
            {filteredProducts.map((product) => (
                <Grid item md={4} xs={12} key={product.id} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    paddingBottom: "5%"
                }}>
                    <ProductCardInFilter
                        imageUrl={product.imageUrl}
                        title={product.title}
                        description={product.description}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
const Filter: React.FC = () => {
    let ButtonLabels: string[] = ["All"];
    products.forEach(item => {
        if (!ButtonLabels.includes(item.type)) {
            ButtonLabels.push(item.type);
        }
    });
    const [selectedType, setSelectedType] = useState<string>('All');
    const handleButtonClick = (label: string) => {
        setSelectedType(label);
    };

    return (
        <div>
            <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "6vh", borderTop: "2.5px solid #8CB29C", borderBottom: "2.5px solid #8CB29C" }}>
                {ButtonLabels.map((label, index) => (
                    <Grid item sx={{ paddingLeft: "1.5%", display: "flex", alignItems: "center", justifyContent: "center" }} key={index}>
                        <Button
                            key={index} onClick={() => handleButtonClick(label)}
                            variant="text"
                            sx={{  display: "flex", alignItems: "center", justifyContent: "center" ,border: "1px solid #8CB29C", color: "black", fontWeight: 550, fontFamily: 'Inter, sans-serif', borderRadius: '40px', fontSize: '0.600rem', '&:hover': { backgroundColor: '#8CB29C', }, }}
                        >
                            {label}
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <ListProducts type={selectedType} />
        </div>
    );
}



const Products: React.FC = () => {
    const isXS = useMediaQuery('(max-width:600px)');
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid item>
                <ToolbarComponent/>
                <Navbar />
                <InfoBanner tittleComponent={<TitleSectionOne/>}/>
            </Grid>
            <Grid container sx={{paddingBottom: "5%",backgroundColor: '#D9D9D9'}}>
                <Grid item md={3} xs={3}  sx={{paddingTop:"3%",height: isXS ? "250vh":"200vh", borderRight: "2.5px solid #8CB29C", borderTop: "2.5px solid #8CB29C"}}>
                    <TitleFilter/>
                    <GreenBarSection/>
                    <AllProductsSideBar/>
                </Grid>
                <Grid item md={9} xs={9}  sx={{paddingTop:"3%",height:"60vh", borderTop: "2.5px solid #8CB29C"}}>
                    <TitlepProductsSection/>
                    <Filter/>
                </Grid>
            </Grid>
            <Footer/>
        </Box>
    );
};

export default Products;