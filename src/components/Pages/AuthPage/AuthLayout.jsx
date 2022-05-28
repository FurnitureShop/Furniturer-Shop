import { IMAGES } from "assets/images";

import React from "react";
import { Link } from "react-router-dom";

import "./AuthLayout.scss"

export default function AuthLayout(props) {
    const { children } = props

    return (
        <div className="auth">
            <div className="auth__content">
                <div className="auth__content-header">
                    <Link className="header__logo w-64" to="/">
                        <img className="w-full"
                            src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png"
                            alt="Konsept logo"
                            srcSet="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png 330w, 
                            https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng-300x105.png 300w"
                            sizes="(max-width: 330px) 100vw, 330px"
                        />
                    </Link>
                </div>
                <div className="auth__content-body">
                    <div className="body__form w-8/12 p-5">
                        {children}
                    </div>
                </div>
                <div className="auth__content-footer">
                    <div className="footer__contact">
                        <p className="mb-1.5">Please do not hesitate to contact us</p>
                        <a>contact@konsept.com</a>
                    </div>
                    <div className="footer__copyright">
                        Developed by TuyenBao
                        <br /><div className="pt-1">© 2021</div>
                    </div>
                </div>
            </div>
            <div className="auth__image">
                <img
                    src={IMAGES.AuthCover}
                    alt="Furniture background"
                    decoding="auto"
                    sizes="600px"
                    crossOrigin="anonymous"
                />
            </div>
        </div>
    )
}