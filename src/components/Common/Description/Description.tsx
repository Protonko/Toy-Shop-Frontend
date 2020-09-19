import React, {FC} from 'react';
import {DescriptionItem} from './DescriptionItem';

export const Description: FC = () => {
  const items = [1, 2, 3] // tmp
  const renderItems = (item: any) => <DescriptionItem key={item.id} />;

  return (
    <>
      {items.map(renderItems)}
    </>
  );
}
