import React from 'react';

export const Input = ({placeholder, onChange}) => (
    <input
        type="text"
        placeholder={placeholder}
        className="input"
        onChange={onChange}
    />
);
