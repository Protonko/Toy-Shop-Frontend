import React, {FC} from 'react'
import {Input} from 'components/Common/Input';

interface IProps {
  label: string,
  placeholder: string,
  name: string,
  onChange: (value: string, name: string) => void,
}

export const CheckoutInput: FC<IProps> = ({label, name, placeholder, onChange}) => {
  return (
    <div className="checkout__row">
      <label className="checkout__label">
        {label}
      </label>
      <Input placeholder={placeholder} bordered={true} onChange={event => onChange(event.target.value, name)} />
    </div>
  );
};
