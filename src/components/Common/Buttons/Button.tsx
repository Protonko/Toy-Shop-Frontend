// types
import {TClassName} from 'models/types';

import React, {FC} from 'react';
import classNames from 'classnames';

interface IProps {
  title: string,
  onClick: () => void,
  isRemoved?: boolean,
  disabled?: boolean,
  classNamesAdditional: TClassName,
}

export const Button: FC<IProps> = ({
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
