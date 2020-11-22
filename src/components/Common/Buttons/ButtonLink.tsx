// types
import {TClassName} from 'models/types';

import React, {FC} from 'react';
import classNames from 'classnames';

interface IProps {
  text: string,
  disabled?: boolean,
  isRemoved?: boolean,
  onClick: () => void,
  classNamesAdditional?: TClassName,
}

export const ButtonLink: FC<IProps> = ({
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
