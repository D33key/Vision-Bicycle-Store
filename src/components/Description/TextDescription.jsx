import React from "react";
import cl from "./TextDescription.module.scss";
import { ReactComponent as LogoDescription } from "./assets/logo.svg";

const TextDescription = ({ title, description, isLogoShow = false }) => {
    return (
        <section className={cl.section}>
            <div className={cl.wrapper}>
                <h2 className={cl.title}>{title}</h2>
                <div className={cl.info}>
                    <p className={cl.description}>{description}</p>
                    {isLogoShow ? (
                        <LogoDescription className={cl.logo} />
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default TextDescription;
