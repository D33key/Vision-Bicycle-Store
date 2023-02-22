import React from 'react';
import cl from './BgDescription.module.scss'

const BgDescription = ({url}) => {
    return (
        <section className={cl.section}>
            <img src={url} alt="Background" className={cl.background} />
            <h2 className={cl.title}>Freedom under your feet</h2>
        </section>
    );
};

export default BgDescription;