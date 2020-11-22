import React, {FC} from 'react';

interface IProps {
  message: string,
  onClick?: () => void,
}

export const ErrorMessage: FC<IProps> = ({message, onClick}) => {
  return (
    <div className="error-message">
      <p className="error-message__text">{message}</p>
      {onClick && (
        <button className="error-message__button button" onClick={onClick}>
          Try again
        </button>
      )}
    </div>
  )
}
