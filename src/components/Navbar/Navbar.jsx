import { Button, Drawer, Tooltip } from "antd";
import Icon from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import path from "../../paths/Path";
import "./Navbar.scss";

import IconBurger from "../../assets/icons/IconBurger";
import IconUser from "../../assets/icons/IconUser";
import IconCart from "../../assets/icons/IconCart";
import LocalStorageService from "services/LocalStorage";
import { useSelector } from "react-redux";
import { selectUser } from "store/userSlice";

let { user, cart } = path;

let navPath = {
    home: {
        label: "Home",
        route: "/"
    },
    products: {
        label: "Products",
        route: "/products"
    },
    aboutus: {
        label: "About Us",
        route: "/aboutus"
    },
}

const burgerIcon = (props) => <Icon component={IconBurger} {...props} />
const userIcon = (props) => <Icon component={IconUser} {...props} />
const cartIcon = (props) => <Icon component={IconCart} {...props} />

const Navbar = () => {
    const [headerSticky, setHeaderSticky] = useState(false);
    const [headerShrink, setHeaderShrink] = useState(false);

    const [drawerState, setDrawerState] = useState(false);
    const showDrawer = () => setDrawerState(!drawerState)

    const userLogin = useSelector(selectUser);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setHeaderSticky(window.pageYOffset > 0)
            setHeaderShrink(window.pageYOffset > 300)
        })

        return false;
    }, [])

    return (
        <header className={`header font-poppins ${headerSticky ? "header__sticky" : ""} ${headerShrink ? "header__shrink" : ""}`}>
            <div className="furniturer-container flex justify-between items-center">
                <div className="mr-4 lg:mr-16 h-10 md:h-14">
                    <Link to={navPath.home.route}>
                        <img
                            className="h-full"
                            src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png"
                            alt="logo"
                            srcSet="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png 330w, https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng-300x105.png 300w"
                            sizes="(max-width: 330px) 100vw, 330px"
                        />
                    </Link>
                </div>
                <nav className="header__nav mr-auto hidden lg:block">
                    <ul className="flex items-center">
                        {Object.values(navPath).map((item) => (
                            <li key={item.label}>
                                <Link className="furniturer-link" to={item.route}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header__widgets-holder ml-3">
                    <div className="header__widget h-full">
                        {userLogin && <p className="cursor-pointer md:block hidden">{userLogin.name}</p>}
                        <div className="header__widget-content ml-1">
                            <Tooltip title="User">
                                <Link to={userLogin ? user.route : path.login.route}>
                                    <Button
                                        className="header__widget-button"
                                        type="text"
                                        size="large">
                                        <Icon component={userIcon} />
                                    </Button>
                                </Link>
                            </Tooltip>
                        </div>
                    </div>

                    <div className="header__widget h-full">
                        <div className="header__widget-content">
                            <Tooltip title="Cart">
                                <Link to={cart.route}>
                                    <Button
                                        className="header__widget-button"
                                        type="text"
                                        size="large">
                                        <Icon component={cartIcon} />
                                        <span>0</span>
                                    </Button>
                                </Link>
                            </Tooltip>
                        </div>
                    </div>

                    <div
                        className="header__widget h-full block lg:hidden"
                        onClick={showDrawer}>
                        <div className="header_widget-content">
                            <Button
                                className="header__widget-burger header__widget-button block lg:hidden"
                                type="text"
                                size="large">
                                <Icon component={burgerIcon} />
                            </Button>
                        </div>
                    </div>
                </div>

                <Drawer
                    title="Your Cart"
                    placement="right"
                    visible={drawerState}
                    onClose={showDrawer}
                >
                    <p>Test</p>
                </Drawer>
            </div>
        </header>
    );
}

export default Navbar;