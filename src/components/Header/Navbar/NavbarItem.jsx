import React from 'react';
import PropTypes from 'prop-types';

export const NavbarItem = ({href, title}) => (
  <li className="header__navigation-item">
    <a href={href} className="header__navigation-link link">
      {title}
    </a>
  </li>
);

NavbarItem.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
};
