import React, {FC} from 'react';
import classNames from 'classnames';
import {TClassName} from 'models/types';

interface IButtonProps {
  title: string,
  onClick: () => any, // TODO - убрать
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
