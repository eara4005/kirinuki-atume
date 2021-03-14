import React from "react";
import Template from "../templates/TemplateMenu";
import GetThumb from "../controllers/GetThumbnail";
import Img from '../imgs/theme.svg';

const HomePage = () => {
    return(
        <Template>
            <img src={Img} style={{width: '300px',marginTop: '80px'}}/>
            <GetThumb/>
        </Template>
    );
};

export default HomePage;