import React from 'react';
import {Card} from './Card';

export const Cards = ({products}) => {
    return (
        <div className="cards">
            <ul className="cards__list list list--reset">
                {
                    products.map((product, index) => (
                        <li key={index} className="cards__item">
                            <Card {...product} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
