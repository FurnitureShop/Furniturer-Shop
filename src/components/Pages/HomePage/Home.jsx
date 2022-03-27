import React from "react";
import HeroSlider from "./HeroSlider/HeroSlider";
import CoverImages from "./CoverImages/CoverImages";
import OurServices from "./OurServices/OurServices";

const Home = () => {
    return (
        <div>
            <h1>This is a home page</h1>
            <HeroSlider />
            <OurServices />
            <CoverImages />
        </div>
    );
}

export default Home;