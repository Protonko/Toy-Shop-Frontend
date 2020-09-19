import React, {FC} from 'react';
import {Input} from 'components/Common/Input';

interface IFilterSearchProps {
  placeholder: string,
  onChange: (value: any) => any // TODO - убрать

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
