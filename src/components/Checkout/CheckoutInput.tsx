import React, {FC} from 'react';
import {Input} from 'components/Common/Input';

interface IProps {
  label: string,
  placeholder: string,
}

export const CheckoutInput: FC<IProps> = ({label, placeholder}) => {
  return (
    <div className="checkout__row">
      <label className="checkout__label">
        {label}
      </label>
      <Input placeholder={placeholder} bordered={true} onChange={() => {}} />
    </div>
  );
};
