import React, {FC} from 'react';
import {ReactComponent as LoupeLogo} from 'assets/icons/loupe.svg';

interface INotificationProps {
  text: string,
}

export const Notification: FC<INotificationProps> = ({text}) => {
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
