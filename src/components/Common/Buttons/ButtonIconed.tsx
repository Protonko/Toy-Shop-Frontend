// types
import {TClassName, TTypesButton, TAttributesButton} from 'models/types';
import {TYPES_BUTTON} from 'models/enums';

import React, {FC, ReactNode} from 'react';
import classNames from 'classnames';

export interface IProps {
  children: ReactNode,
  onClick: (...args: any) => void,
  disabled?: boolean,
  type?: TTypesButton,
  classNamesAdditional?: TClassName,
  attrs?: TAttributesButton,
}

export const ButtonIconed: FC<IProps> = ({
  children,
  onClick,
  disabled,
  classNamesAdditional = [],
  type= TYPES_BUTTON.BUTTON,
  ...attrs
}) => {
  const classNamesButton = classNames(
    'button',
    'button--iconed',
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
      {children}
    </button>
  );
}
