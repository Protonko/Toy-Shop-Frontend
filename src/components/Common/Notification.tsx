import React, {FC} from 'react';
import {ReactComponent as LoupeLogo} from 'assets/icons/loupe.svg';

interface IProps {
  text: string,
}

export const Notification: FC<IProps> = ({text}) => {
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
