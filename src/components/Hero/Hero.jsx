import React from "react";
import cl from "./Hero.module.scss";

const Hero = () => {
    return (
        <section className={cl.heroSection}>
            <div className={cl.bgWrapper}>
                <img src="img/heroSection/heroBg.jpg" alt="Bycicle" />
            </div>
            <div className={cl.bannerWrapper}>
                <div className={cl.banner}>
                    <span className="subtitle">Vision Electric</span>
                    <h1 className="title">Discover Ivy & Ace</h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
