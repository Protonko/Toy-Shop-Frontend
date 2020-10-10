import React, {ChangeEvent, FC} from 'react';
import {Input} from 'components/Common/Input';

interface IFilterSearchProps {
  placeholder: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,

}

export const FilterSearch: FC<IFilterSearchProps> = ({
  placeholder,
  onChange,
}) => (
  <li className="sidebar__item">
    <Input
      placeholder={placeholder}
      onChange={onChange}
    />
  </li>
);
