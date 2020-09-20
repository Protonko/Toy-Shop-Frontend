import React, {FC} from 'react';
import {INavData} from 'models/interfaces';
import {NavLink} from 'react-router-dom';

export const NavbarItem: FC<INavData> = ({
  href,
  title,
}) => (
  <li className="header__navigation-item">
    <NavLink
      exact
      to={href}
      className="header__navigation-link link"
      activeClassName='link--active'
    >
      {title}
    </NavLink>
  </li>
);
