import React from 'react';
import PropTypes from 'prop-types';
import {SocialsItem} from './SocialsItem';

export const Socials = ({data}) => {
  return (
    <div className="socials">
      <ul className="socials__list list list--reset">
        {data.map((link, index) => (
          <SocialsItem key={index} {...link} />
        ))}
      </ul>
    </div>
  )
};

Socials.propTypes = {
  data: PropTypes.array,
};
