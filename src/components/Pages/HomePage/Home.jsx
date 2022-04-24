import React from "react";

import HeroSlider from "./HeroSlider/HeroSlider";
import CoverImages from "./CoverImages/CoverImages";
import OurServices from "./OurServices/OurServices";
import LastestItems from "./LastestItems/LastestItems";

const Home = () => {
    return (
        <div>
            <HeroSlider />
            <LastestItems />
            <OurServices />
            <CoverImages />
        </div>
    );
}

export default Home;