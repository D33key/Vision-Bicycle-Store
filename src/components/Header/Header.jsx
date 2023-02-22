import React from "react";
import cl from "./Header.module.scss";
import Item from "./HeaderItems/Item";
import useMatchMedia from "../../hooks/useMatchMedia";

import { ReactComponent as LogoSVG } from "./assets/logo.svg";
import { ReactComponent as CartMobile } from "./assets/cartMobile.svg";
import { ReactComponent as LoginMobile } from "./assets/login.svg";
import { ReactComponent as BurgerMobile } from "./assets/burger.svg";
import { Route, Routes } from "react-router-dom";

const Header = () => {
    const listsOfMenu = [
        {
            title: "Electric",
            subtitles: [
                { name: "All", url: "/allelectric" },
                { name: "Ivy", url: "/ivy" },
                { name: "Ace", url: "/ace" },
                { name: "Company", url: "/company" },
            ],
        },
        {
            title: "City",
            subtitles: [
                { name: "All", url: "/allcity" },
                { name: "Men", url: "/man" },
                { name: "Women", url: "/women" },
            ],
        },
        {
            title: "Kids",
            url: "/kids",
        },
        {
            title: "Accessories",
            subtitles: [
                { name: "All", url: "/allaccessories" },
                { name: "Gift cards", url: "/giftcards" },
            ],
        },
        {
            title: "Book a Test Ride",
            url: "/booking",
        },
    ];

    let { isMobile, isTablet, isDesktop } = useMatchMedia();

    return (
        <header className={cl.header}>
            <nav className={cl.nav}>
                {isMobile || isTablet ? (
                    <div className={cl.controls}>
                        <div className={cl.controlsButton}>
                            <button type="button" className={cl.svgMobile}>
                                <BurgerMobile />
                            </button>
                        </div>
                    </div>
                ) : null}
                <a className={cl.logo} href="/">
                    <LogoSVG />
                </a>
                <ul className={cl.desktopNav}>
                    {listsOfMenu.map((item) => (
                        <Item
                            key={item.title}
                            title={item.title}
                            subtitles={item.subtitles || item.url}
                        />
                    ))}
                </ul>
                <div className={cl.controls}>
                    <div className={cl.controlsButton}>
                        {isMobile || isTablet ? (
                            <div className={cl.svgMobile}>
                                <LoginMobile />
                            </div>
                        ) : null}
                        <a href="/">
                            <span className={cl.label}>Login</span>
                        </a>
                    </div>
                    <button type="button" className={cl.controlsButton}>
                        {isMobile || isTablet ? (
                            <div className={cl.svgMobile}>
                                <CartMobile />
                            </div>
                        ) : null}
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
