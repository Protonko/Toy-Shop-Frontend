import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export const NavbarItem = ({href, title}) => (
  <li className="header__navigation-item">
    <NavLink exact to={href} className="header__navigation-link link" activeClassName='link--active'>
      {title}
    </NavLink>
  </li>
);

NavbarItem.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
};
