import React from "react";
import Template from "../templates/TemplateMenu";
import GetVideos from "../controllers/GetVideos";
import Img from '../imgs/theme.svg';

const HomePage = () => {
    return(
        <Template>
            <img src={Img} style={{width: '300px',marginTop: '80px'}}/>
            <GetVideos/>
        </Template>
    );
};

export default HomePage;