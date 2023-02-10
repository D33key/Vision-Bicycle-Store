import React from "react";
import { ReactComponent as LogoSVG } from "./assets/logo.svg";
import { ReactComponent as CartMobile } from "./assets/cartMobile.svg";
import { ReactComponent as LoginMobile } from "./assets/login.svg";
import { ReactComponent as BurgerMobile } from "./assets/burger.svg";
import cl from "./Header.module.scss";
import Item from "./HeaderItems/Item";

const Header = () => {
    const listsOfMenu = [
        {
            title: "Electric",
            subtitles: ["All", "Ivy", "Ace", "Company"],
        },
        {
            title: "City",
            subtitles: ["All", "Men", "Women"],
        },
        {
            title: "Kids",
        },
        {
            title: "Accessories",
            subtitles: ["All", "Gift cards"],
        },
        {
            title: "Book a Test Ride",
        },
    ];

    return (
        <header className={cl.header}>
            <nav className={cl.nav}>
                <div className={cl.controls}>
                    <div className={cl.controlsButton}>
                        <button type="button" className={cl.svgMobile}>
                            <BurgerMobile />
                        </button>
                    </div>
                </div>
                <a className={cl.logo} href="/">
                    <LogoSVG />
                </a>
                <ul className={cl.desktopNav}>
                    {listsOfMenu.map((item) => (
                        <Item
                            key={item.title}
                            title={item.title}
                            isExpand={true}
                            subtitles={item.subtitles}
                        />
                    ))}
                </ul>
                <div className={cl.controls}>
                    <div className={cl.controlsButton}>
                        <div className={cl.svgMobile}>
                            <LoginMobile />
                        </div>
                        <a href="/">
                            <span className={cl.label}>Login</span>
                        </a>
                    </div>
                    <button type="button" className={cl.controlsButton}>
                        <div className={cl.svgMobile}>
                            <CartMobile />
                        </div>
                        <span className={cl.label}>
                            {"Cart ("}
                            <span className={cl.cartCount}>0</span>
                            {")"}
                        </span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
