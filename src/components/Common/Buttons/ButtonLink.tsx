// types
import {TAttributesButton, TClassName, TTypesButton} from 'models/types';
import {TYPES_BUTTON} from 'models/enums';

import React, {FC} from 'react';
import classNames from 'classnames';

export interface IProps {
  text: string,
  disabled?: boolean,
  isRemoved?: boolean,
  onClick: (...args: any) => void,
  type?: TTypesButton,
  classNamesAdditional?: TClassName,
  attrs?: TAttributesButton,
}

export const ButtonLink: FC<IProps> = ({
  text,
  disabled,
  isRemoved,
  onClick,
  type = TYPES_BUTTON.BUTTON,
  classNamesAdditional = [],
  ...attrs
}) => {
  const classNamesButton = classNames(
    'button',
    'button--linked',
    {'button--colored-red': isRemoved},
    {'button--disabled': disabled},
    ...classNamesAdditional,
  );

  return (
    <button
      className={classNamesButton}
      onClick={onClick}
      type={type}
      {...attrs}
    >
      {text}
    </button>
  )
}
