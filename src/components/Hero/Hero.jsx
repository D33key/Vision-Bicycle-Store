import React from "react";
import Button from '../UI/Button';
import cl from "./Hero.module.scss";

const Hero = () => {
    return (
        <section className={cl.heroSection}>
            <div className={cl.bgWrapper}>
                <img src="img/heroSection/heroBg.jpg" alt="Bycicle" />
            </div>
            <div className={cl.buttonWrapper}>
                <Button
                    title={"Discover Ivy & Ace"}
                    subtitle={"Vision Electric"}
                    color='white'
                />
            </div>
        </section>
    );
};

export default Hero;
