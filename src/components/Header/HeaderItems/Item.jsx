import React from "react";
import cl from "../Header.module.scss";
import { Link } from "react-router-dom";

const Item = ({ title, subtitles }) => {
    const [isClicked, setisClicked] = React.useState(false);
    const isExpand = Array.isArray(subtitles);

    const onClick = () => {
        setisClicked(!isClicked);
    };
    return (
        <li className={`${cl.desktopMenu} ${isClicked ? cl.active : ""}`}>
            {isExpand && subtitles ? (
                <>
                    <button
                        onClick={onClick}
                        className={cl.menuTitleWrapper}
                        type="button"
                    >
                        <span className={cl.menuTitle}>{title}</span>
                    </button>
                    <div className={cl.desktopMenuList}>
                        <div className={cl.desktopMenuListWrapper}>
                            {subtitles.map((subtitle) => (
                                <div className={cl.link}>
                                    <Link
                                        to={subtitle.url}
                                        className={cl.menuTitleWrapper}
                                    >
                                        <span className={cl.menuTitle}>
                                            {subtitle.name}
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <Link className={cl.menuTitleWrapper} to={subtitles}>
                    <span className={cl.menuTitle}>{title}</span>
                </Link>
            )}
        </li>
    );
};

export default Item;
