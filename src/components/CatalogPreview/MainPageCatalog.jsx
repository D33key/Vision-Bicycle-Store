import React from "react";
import cl from "./Catalog.module.scss";
import Item from "./Item/Item";

const CatalogPreview = ({ title }) => {
    return (
        <section className={cl.wrapper}>
            <div className={cl.titleWrapper}>
                <h2 className={cl.title}>{title}</h2>
            </div>
            <div className={cl.collections}>
                <div className={cl.minorCollection}>
                    <div className={cl.itemWrapper}>
                        <Item
                            title={"Discover more"}
                            subtitle={"Vision electric"}
                            url={"img/Bycicles/item2.jpg"}
                        />
                        <Item
                            title={"Discover more"}
                            subtitle={"City Bikes"}
                            url={"img/Bycicles/item3.jpg"}
                            color={"white"}
                        />
                    </div>
                </div>
                <div className={cl.majorCollection}>
                    <Item
                        title={"Discover more"}
                        subtitle={"Ace Bikes"}
                        url={"img/Bycicles/item6.jpg"}
                    />
                </div>
            </div>
        </section>
    );
};

export default CatalogPreview;
