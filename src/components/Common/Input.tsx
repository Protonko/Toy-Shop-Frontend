import React, {ChangeEvent, FC} from 'react';

interface IProps {
  placeholder: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const Input: FC<IProps> = ({placeholder, onChange}) => (
    <input
        type="text"
        placeholder={placeholder}
        className="input"
        onChange={onChange}
    />
);
