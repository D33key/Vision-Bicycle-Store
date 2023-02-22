import React from "react";
import cl from "./Footer.module.scss";
import FooterItems from './FooterItems';

const Footer = () => {
    const listItem = [
        {
            title: "Explorer",
            menuItem: [
                {
                    name: "Electic Bikes",
                    url: "electric",
                },
                {
                    name: "City Bikes",
                    url: "city",
                },
                {
                    name: "Kids Bikes",
                    url: "kids",
                },
                {
                    name: "Frame Size",
                    url: "frames",
                },
            ],
        },
        {
            title: "About",
            menuItem: [
                {
                    name: "About us",
                    url: "about",
                },
                {
                    name: "Jobs",
                    url: "jobs",
                },
                {
                    name: "Reviews",
                    url: "reviews",
                },
                {
                    name: "Journal",
                    url: "journal",
                },
            ],
        },
    ];

    return (
        <footer>
            <div className={cl.wrapper}>
                <div className={cl.leftSide}>
                    {listItem.map((item) => (
                        <FooterItems title={item.title} list={item.menuItem} />
                    ))}
                </div>
                <div className={cl.rightSide}>
                    <h2 className={cl.title}>We're here to help</h2>
                    <ul className={cl.contactInfo}>
                        <li className={cl.contactItem}>
                            Monday to Friday 8am - 10pm
                        </li>
                        <li className={cl.contactItem}>
                            Phone: <a href="#">+7-999-99-99-99</a>
                        </li>
                        <li className={cl.contactItem}>
                            Email: <a href="#">vision@vision.com</a>
                        </li>
                        <li className={cl.contactItem}>
                            Social media: <a href="#">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
