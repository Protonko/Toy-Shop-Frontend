import React, {FC} from 'react';
import classNames from 'classnames';
import {ILinesItems} from 'models/interfaces';
import {DottedLineItem} from './DottedLineItem';

interface IProps {
  items: Array<ILinesItems>,
  description?: string,
  className?: string,
  classesItem?: Array<string>,
}

export const DottedLine: FC<IProps> = ({
  items,
  description,
  className,
  classesItem,
}) => {
  const classNamesLine = classNames(
    'line',
    [className]
  )

  const renderItem = (item: ILinesItems) =>
    <DottedLineItem {...item} key={item.id} classesItem={classesItem} />;

  return (
    <div className={classNamesLine}>
      <div className="line__info">
        {items.map(renderItem)}
      </div>
      <p className="line__description">
        {description}
      </p>
    </div>
  );
}
