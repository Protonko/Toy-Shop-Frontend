import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as LoupeLogo} from 'assets/icons/loupe.svg';

export const Notification = ({text}) => {
  return (
    <div className="notification">
      <div className="notification__wrapper">
        <p className="notification__text">{text}</p>
        <span className="notification__logo">
          <LoupeLogo />
        </span>
      </div>
    </div>
  )
}

Notification.protoTypes = {
  text: PropTypes.string,
};
