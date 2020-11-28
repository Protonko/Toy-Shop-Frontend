// types
import {TAttributesButton, TTypesButton} from 'models/types';
import {TYPES_BUTTON} from 'models/enums';

import React, {FC} from 'react';
import classNames from 'classnames';

export interface IProps {
  isMinus?: boolean,
  onClick: () => void,
  type?: TTypesButton,
  attrs?: TAttributesButton,
}

export const CountButton: FC<IProps> = ({
  isMinus,
  onClick,
  type = TYPES_BUTTON.BUTTON,
  ...attrs
}) => {
  const classNamesButton: string = classNames(
      'button',
      'button--count',
      {'button--count-minus': isMinus}
  );

  return (
      <button
        className={classNamesButton}
        onClick={onClick}
        data-symbol={isMinus ? '-' : '+'}
        type={type}
        {...attrs}
      />
  );
};
