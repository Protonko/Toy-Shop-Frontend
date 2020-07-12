import React from 'react';

export const Button = ({title, onClick}) => (
    <button className="button" onClick={onClick}>
        {title}
    </button>
);
