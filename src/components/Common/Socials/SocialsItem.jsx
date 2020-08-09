import React from 'react';

export const SocialsItem = ({href, icon}) => {
  return (
    <li className="socials__item">
      <a href={href} className="socials__link">
        {icon}
      </a>
    </li>
  )
};
