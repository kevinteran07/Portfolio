import React, { FunctionComponent } from 'react';

import classes from './Card.module.css';

type CardProps = {
    title: string,
}

const Card: FunctionComponent<CardProps> = ({title}: CardProps) => {
    return (
        <div className={classes.card}>
            <p>{title}</p>
        </div>
    )
};

export default Card;