import React, {ChangeEvent, FC} from 'react';

interface IInputProps {
  placeholder: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const Input: FC<IInputProps> = ({placeholder, onChange}) => (
    <input
        type="text"
        placeholder={placeholder}
        className="input"
        onChange={onChange}
    />
);
