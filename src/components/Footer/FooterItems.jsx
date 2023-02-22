import React from "react";
import cl from "./Footer.module.scss";

const FooterItems = ({ title, list }) => {
    return (
        <div className={cl.footerSection}>
            <h2 className={cl.title}>{title}</h2>
            <nav className={cl.footerNavigation}>
                <ul className={cl.footerList}>
                    {list.map((link) => (
                        <li className={cl.footerItem}>
                            <a className={cl.footerLink} href={link.url}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default FooterItems;
