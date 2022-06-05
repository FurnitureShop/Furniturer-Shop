import React from "react";
import AboutUsBanner from "./AboutUsBanner";
import AboutUsComment from "./AboutUsComment";
import AboutUsTeam from "./AboutUsTeam";
import ContactForm from "./ContactForm";

const Aboutus = () => {
    const container = "furniturer-container"

    return (
        <div className="about-us ">
            <AboutUsBanner />
            <AboutUsComment container={container} />
            <AboutUsTeam container={container} />
            <ContactForm container={container}/>
        </div>
    );
}

export default Aboutus;