import React from "react";
import "./Footer.scss"
import IconFacebook from "../../assets/icons/IconFacebook";
import IconGithub from "../../assets/icons/IconGithub"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="furniturer-container grid grid-cols-2 sm:justify-items-center sm:grid-cols-4 gap-x-6 gap-y-6">
                <div className="footer__content space-y-3">
                    <div className="space-y-2">
                        <h3 className="footer__content-headline">Contact</h3>
                        <ul className="space-y-2 ml-2">
                            <li>
                                <a href="/">
                                    +112 345 6789
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    1316 Abbot Kinney Blvd.
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Copenhagen CA 90291
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-x-3 ml-1">
                        <a
                            className="footer__content-icon"
                            href="/">
                            <IconFacebook />
                        </a>
                        <a
                            className="footer__content-icon"
                            href="/">
                            <IconGithub />
                        </a>
                    </div>
                </div>
                <div className="footer__content space-y-3">
                    <h3 className="footer__content-headline">Product</h3>
                    <ul className="space-y-2 ml-2">
                        <li><a href="/">Flowers</a></li>
                        <li><a href="/">Furniture</a></li>
                        <li><a href="/">Flower pot</a></li>
                        <li><a href="/">Decorations</a></li>
                    </ul>
                </div>
                <div className="footer__content space-y-3">
                    <h3 className="footer__content-headline">Services</h3>
                    <ul className="space-y-2 ml-2">
                        <li><a href="/">My Account</a></li>
                        <li><a href="/">Terms of Use</a></li>
                        <li><a href="/">Deliveries and Returns</a></li>
                        <li><a href="/">Gift Cards</a></li>
                    </ul>
                </div>
                <div className="footer__content space-y-3">
                    <h3 className="footer__content-headline">About Us</h3>
                    <ul className="space-y-2 ml-2">
                        <li><a href="/">Our Story</a></li>
                        <li><a href="/">Job Opportunities</a></li>
                        <li><a href="/">Store Locator</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer