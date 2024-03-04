import React, {useEffect, useState} from "react";
import {Grid, useMediaQuery} from "@mui/material";
import bannerMd from "../../images/InfoBanner.jpg";
import bannerXS from "../../images/InfoBanner.jpg";
import logo from "../../images/logo.png";

interface BannerProps {
    tittleComponent?: React.ReactNode;
    content?: React.ReactNode;
}
const Banner: React.FC <BannerProps> = ({ tittleComponent, content }) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [banner, setBanner] = useState(bannerMd);
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 800) {
                setBanner(bannerXS);
            } else {
                setBanner(bannerMd);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Grid container justifyContent="center" alignItems="center" style={{
            height: isSmallScreen ? "90vh" : "40vh",
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: isSmallScreen ? "repeat-y" : "no-repeat"
        }}>
            <Grid item direction={"column"} xs={12} style={{textAlign: "center",display: "flex", alignItems:"center"}}>
                <img
                    src={logo}
                    alt="logo"
                    className="logo-img"
                    style={{marginTop: isSmallScreen ? "13.5%" : "4.5%", marginLeft: "1%"}}
                />
                {tittleComponent}
                {content && content}
            </Grid>
        </Grid>
    )
}


export default Banner;