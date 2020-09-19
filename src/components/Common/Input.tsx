import React, {FC} from 'react';

interface IInputProps {
  placeholder: string,
  onChange: () => any, // TODO - убрать
}

export const Input: FC<IInputProps> = ({placeholder, onChange}) => (
    <input
        type="text"
        placeholder={placeholder}
        className="input"
        onChange={onChange}
    />
);
