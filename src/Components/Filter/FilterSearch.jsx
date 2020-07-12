import React from 'react';
import {Input} from '../Common/Input';

export const FilterSearch = ({placeholder, onChange}) => (
    <li className="sidebar__item">
        <Input
            placeholder={placeholder}
            onChange={onChange}
        />
    </li>
);
