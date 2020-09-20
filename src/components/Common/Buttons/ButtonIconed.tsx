import React, {FC, ReactNode} from 'react';
import classNames from 'classnames';
import {TClassName} from 'models/types';

interface IButtonIconedProps {
  children: ReactNode,
  onClick: () => any, // TODO - убрать
  disabled?: boolean,
  classNamesAdditional: TClassName,
  attrs?: Array<string | number>,
}

export const ButtonIconed: FC<IButtonIconedProps> = ({
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
