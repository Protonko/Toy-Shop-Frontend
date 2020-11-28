import React, {FC} from 'react';
import classNames from 'classnames';

export interface IProps {
  isMinus?: boolean,
  onClick: () => void,
}

export const CountButton: FC<IProps> = ({
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
