import React from "react";
import { Link } from "react-router-dom";
import path from "../../Paths/Path";
import "./Navbar.scss"

const navPath = Object.values(path)

const Navbar = () =>
{

    return (
        <header className="header font-poppins">
            <div className="flex items-center">
                <div className="mr-4 lg:mr-16 h-10 md:h-14">
                    <Link to={path.home}>
                        <img
                            className="h-full"
                            src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png"
                            alt="logo"
                            srcSet="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png 330w, https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng-300x105.png 300w"
                            sizes="(max-width: 330px) 100vw, 330px"
                        />
                    </Link>
                </div>
                <nav className="header__nav mr-auto">
                    <ul className="flex">
                        {navPath.map((item) => (
                            <li key={item.label}>
                                <Link className="text-black" to={item.route}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;