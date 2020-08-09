import React from 'react';
import {socialsData} from './socialsData';
import {SocialsItem} from './SocialsItem';

export const Socials = () => {
  return (
    <div className="socials">
      <ul className="socials__list list list--reset">
        {socialsData.map((link, index) => (
          <SocialsItem key={index} {...link} />
        ))}
      </ul>
    </div>
  )
}
