import logo from "../../images/logo.png";
import React from "react";
import {useMediaQuery} from "@mui/material";


const Logo: React.FC = () => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    return (
        <img
            src={logo}
            alt="logo"
            className="logo-img"
            style={{marginTop: isSmallScreen ? "13.5%" : "4.5%", marginLeft: "1%"}}
        />
    )
}

export default Logo;