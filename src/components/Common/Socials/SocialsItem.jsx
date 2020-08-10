import React from 'react';
import PropTypes from 'prop-types';

export const SocialsItem = ({href, icon}) => {
  console.log(icon);
  return (
    <li className="socials__item">
      <a href={href} target="_black" className="socials__link">
        {icon}
      </a>
    </li>
  )
};

SocialsItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.element,
};
