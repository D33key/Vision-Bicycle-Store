import React from "react";
import cl from "./Button.module.scss";

const Button = ({ title, subtitle, color='black' }) => {
    return (
        <button
            className={`${cl.buttonWrapper} ${
                color === "white" ? cl.white : cl.black
            }`}
        >
            <span
                className={`${cl.subtitle} ${
                    color === "white" ? null : cl.white
                }`}
            >
                {subtitle}
            </span>
            <p
                className={`${cl.title} ${color === "white" ? null : cl.white}`}
            >
                {title}
            </p>
        </button>
    );
};

export default Button;
