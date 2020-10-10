import React, {FC, MouseEvent} from 'react';
import classNames from 'classnames';

interface IFilterItemProps {
  active?: boolean,
  title: string,
  onClick: (event: MouseEvent) => void,
}

export const FilterItem: FC<IFilterItemProps> = ({
  active,
  title,
  onClick,
}) => {
  const classNamesButton: string = classNames(
    'sidebar__button',
    'button',
    'button--grey',
    {'sidebar__button--active': active});

  return (
    <li className="sidebar__item">
      <button
        className={classNamesButton}
        onClick={onClick}
      >
        {title}
      </button>
    </li>
  );
};
