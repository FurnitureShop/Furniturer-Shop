import React from "react";
import { Link } from "react-router-dom"
import path from "../../Paths/Path";

const Navbar = () => 
{

    return (
        <header>
            <div>
                <Link to={path.home.route}>
                <img
                     className="h-full"
                     src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png"
                     alt="logo"
                     srcSet="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png 330w, https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng-300x105.png 300w"
                     sizes="(max-width: 330px) 100vw, 330px" />
                </Link>
            </div>
        </header>
    );
}

export default Navbar;