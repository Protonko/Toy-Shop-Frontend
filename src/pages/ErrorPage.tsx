import React, {FC} from 'react';
import {ReactComponent as NotFound} from 'assets/icons/404.svg';

export const ErrorPage: FC = () => {
  return (
    <div className="error-page">
      <div className="error-page__logo">
        <NotFound />
      </div>
    </div>
  )
};
