import React from "react";
import HeroSlider from "./HeroSlider/HeroSlider";
import CoverImages from "./CoverImages/CoverImages";
import OurServices from "./OurServices/OurServices";

const Home = () => {
    return (
        <div>
            <HeroSlider />
            <OurServices />
            <CoverImages />
        </div>
    );
}

export default Home;