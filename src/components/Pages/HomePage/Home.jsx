import React from "react";
import HeroSlider from "./HeroSlider/HeroSlider";
import CoverImages from "./CoverImages/CoverImages";

const Home = () => {
    return (
        <div>
            <h1>This is a home page</h1>
            <HeroSlider />
            <CoverImages />
        </div>
    );
}

export default Home;