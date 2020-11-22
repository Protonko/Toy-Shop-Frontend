// types
import {TClassName} from 'models/types';

import React, {FC} from 'react';
import classNames from 'classnames';

interface IButtonProps {
  title: string,
  onClick: () => void,
  isRemoved?: boolean,
  disabled?: boolean,
  classNamesAdditional: TClassName,
}

export const Button: FC<IButtonProps> = ({
  title,
  onClick,
  isRemoved,
  disabled,
  classNamesAdditional = []
}) => {
  const classNamesButton: string = classNames(
    'button',
    {'button--disabled': disabled},
    {'button--red': isRemoved},
    ...classNamesAdditional,
  );

  return (
    <button className={classNamesButton} onClick={onClick}>
      {title}
    </button>
  );
}
