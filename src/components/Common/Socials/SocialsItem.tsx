import React, {FC} from 'react';
import {ISocials} from 'typing/interfaces';

export const SocialsItem: FC<ISocials> = ({
  href,
  icon,
}) => {
  return (
    <li className="socials__item">
      <a href={href} target="_black" className="socials__link">
        {icon}
      </a>
    </li>
  )
};
