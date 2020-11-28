// types
import {TClassName, TTypesButton, TAttributesButton} from 'models/types';
import {TYPES_BUTTON} from 'models/enums';

import React, {FC} from 'react';
import classNames from 'classnames';

export interface IProps {
  title: string,
  onClick: (...args: any) => void,
  isRemoved?: boolean,
  disabled?: boolean,
  type?: TTypesButton,
  classNamesAdditional?: TClassName,
  attrs?: TAttributesButton,
}

export const Button: FC<IProps> = ({
  title,
  onClick,
  isRemoved,
  disabled,
  type = TYPES_BUTTON.BUTTON,
  classNamesAdditional = [],
  ...attrs
}) => {
  const classNamesButton = classNames(
    'button',
    {'button--disabled': disabled},
    {'button--red': isRemoved},
    ...classNamesAdditional,
  );

  return (
    <button
      className={classNamesButton}
      onClick={onClick}
      type={type}
      {...attrs}
    >
      {title}
    </button>
  );
}
