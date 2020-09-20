import React, {FC} from 'react';
import classNames from 'classnames';
import {TClassName} from 'models/types';

interface ICheckboxProps {
  text?: string,
  classNamesText?: TClassName,
  checked?: boolean,
  onChange: () => any // TODO - убрать
}

export const Checkbox: FC<ICheckboxProps> = ({
  text,
  classNamesText = [],
  checked,
  onChange
}) => {
  const classNamesCheckboxText = classNames(
    'checkbox__text',
    ...classNamesText,
  );

  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input" checked={checked} onChange={onChange} />
      <span className={classNamesCheckboxText}>{text}</span>
    </label>
  );
}
