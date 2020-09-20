import React, {FC} from 'react';
import classNames from 'classnames';
import {TClassName} from 'models/types';

interface IButtonLinkProps {
  text: string,
  disabled?: boolean,
  isRemoved?: boolean,
  onClick: () => any, // TODO - убрать
  classNamesAdditional?: TClassName,
}

export const ButtonLink: FC<IButtonLinkProps> = ({
  text,
  disabled,
  isRemoved,
  onClick,
  classNamesAdditional = [],
}) => {
  const classNamesButton = classNames(
    'button',
    'button--linked',
    {'button--colored-red': isRemoved},
    {'button--disabled': disabled},
    ...classNamesAdditional,
  );

  return (
    <button className={classNamesButton} onClick={onClick} type="button">
      {text}
    </button>
  )
}
