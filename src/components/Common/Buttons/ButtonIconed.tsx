// types
import {TClassName} from 'models/types';

import React, {FC, ReactNode} from 'react';
import classNames from 'classnames';

export interface IProps {
  children: ReactNode,
  onClick: () => void,
  disabled?: boolean,
  classNamesAdditional?: TClassName,
  attrs?: Array<string | number>,
}

export const ButtonIconed: FC<IProps> = ({
  children,
  onClick,
  disabled,
  classNamesAdditional = [],
  ...attrs
}) => {
  const classNamesButton = classNames(
    'button',
    'button--iconed',
    {'button--disabled': disabled},
    ...classNamesAdditional,
  );

  return (
    <button className={classNamesButton} onClick={onClick} {...attrs}>
      {children}
    </button>
  );
}
