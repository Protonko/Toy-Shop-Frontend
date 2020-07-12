import React from 'react';
import {Cards} from './Cards';

export const Content = ({products}) => (
        <div className="page__content-main">
            <Cards products={products} />
    </div>
);
