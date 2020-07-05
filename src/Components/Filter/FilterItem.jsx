import React from 'react';
import classNames from 'classnames';

export const FilterItem = ({active, title, onClick}) => {
    const classNamesButton = classNames(
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
}
