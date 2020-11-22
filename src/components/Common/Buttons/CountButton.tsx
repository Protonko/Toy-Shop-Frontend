import React, {FC} from 'react';
import classNames from 'classnames';

interface ICountButtonProps {
  isMinus?: boolean,
  onClick: () => void,
}

export const CountButton: FC<ICountButtonProps> = ({
  isMinus,
  onClick,
}) => {
  const classNamesButton: string = classNames(
      'button',
      'button--count',
      {'button--count-minus': isMinus}
  );

  return (
      <button
        className={classNamesButton}
        onClick={onClick}
        data-symbol={isMinus ? '-' : '+'}
      />
  );
};
