import React from "react";
import Button from "../../UI/Button";
import cl from "./Item.module.scss";

const Item = ({ title, subtitle, url, color = 'black', major = false }) => {
    const [isHover, setIsHover] = React.useState(false);
    const onHover = () => {
        setIsHover(!isHover);
    };
    return (
        <div
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            className={cl.wrapper}
        >
            <h2 className={`${cl.bycicleName} ${color === 'white' ? cl.white : ''}`}>{subtitle}</h2>
            <img className={cl.img} src={url} alt="Bycicle" />
            <div className={cl.btnWrapper}>
                <Button title={title} subtitle={subtitle} />
            </div>
        </div>
    );
};

export default Item;
