// types
import {TClassName} from 'models/types';

import React, {FC} from 'react';
import classNames from 'classnames';

interface IProps {
  text?: string,
  classNamesText?: TClassName,
  checked?: boolean,
  onChange: () => void,
}

export const Checkbox: FC<IProps> = ({
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
