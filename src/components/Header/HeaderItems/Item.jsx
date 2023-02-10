import React from "react";
import cl from "../Header.module.scss";

const Item = ({ title, isExpand = false, subtitles }) => {
    const [isClicked, setisClicked] = React.useState(false);

    const onClick = () => {
        setisClicked(!isClicked);
    };
    return (
        <li className={`${cl.desktopMenu} ${isClicked ? cl.active : ""}`}>
            <button
                onClick={onClick}
                className={cl.menuTitleWrapper}
                type="button"
            >
                <span className={cl.menuTitle}>{title}</span>
            </button>
            {isExpand && subtitles ? (
                <div className={cl.desktopMenuList}>
                    <div className={cl.desktopMenuListWrapper}>
                        {subtitles.map((subtitle) => (
                            <div className={cl.link}>
                                <a href="#" className={cl.menuTitleWrapper}>
                                    <span className={cl.menuTitle}>
                                        {subtitle}
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </li>
    );
};

export default Item;
