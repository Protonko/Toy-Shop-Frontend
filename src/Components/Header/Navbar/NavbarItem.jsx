import React from 'react';

export const NavbarItem = ({href, title}) => (
    <li className="header__navigation-item">
        <a href={href} className="header__navigation-link link">
            {title}
        </a>
    </li>
);
