import React from 'react';
import {DescriptionItem} from './DescriptionItem';

export const Description = () => {
  const items = [{id: 1}] // tmp
  const renderItems = item => <DescriptionItem key={item.id} {...item} />;

  return items.map(renderItems);
}
