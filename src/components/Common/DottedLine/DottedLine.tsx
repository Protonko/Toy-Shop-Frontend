// types
import {ILinesItems} from 'models/interfaces';

import React, {FC} from 'react';
import classNames from 'classnames';
import {DottedLineItem} from './DottedLineItem';

interface IProps {
  items: Array<ILinesItems | void>,
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

  const renderItem = (item: (ILinesItems | void), index?: number) => {
    if (item) {
      return <DottedLineItem {...item} key={index} classesItem={classesItem} />;
    } else {
      return null;
    }
  }

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
