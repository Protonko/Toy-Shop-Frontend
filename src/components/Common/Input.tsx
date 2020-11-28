// types
import {TClassName} from 'models/types';

import React, {ChangeEvent, FC} from 'react';
import classNames from 'classnames';

interface IProps {
  placeholder: string,
  bordered?: boolean,
  classNamesAdditional?: TClassName,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const Input: FC<IProps> = ({
  placeholder,
  bordered,
  onChange,
  classNamesAdditional = [],
}) => {
  const classNamesInput = classNames(
    'input',
    {'input--bordered': bordered},
    ...classNamesAdditional,
  )
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={classNamesInput}
      onChange={onChange}
    />
  );

}
