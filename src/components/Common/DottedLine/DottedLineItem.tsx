import React, {FC} from 'react';
import classNames from 'classnames';
import {ILinesItems} from 'models/interfaces';

interface IProps extends ILinesItems {
  classesItem?: Array<string>,
}

export const DottedLineItem: FC<IProps> = ({
  term,
  value,
  marked,
  classesItem,
}) => {
  const valueClassNames: string = classNames(
    'line__item',
    'line__item--description',
    {'line__item--colored': marked},
  );

  const classNamesItem: string = classNames(
    'line__list',
    'list',
    'list--reset',
    [...(classesItem ?? [])]
  )

  return (
    <dl className={classNamesItem}>
      <dt className="line__item line__item--term">
        {term}
      </dt>
      <dd className={valueClassNames}>
        {value}
      </dd>
    </dl>
  )
}
