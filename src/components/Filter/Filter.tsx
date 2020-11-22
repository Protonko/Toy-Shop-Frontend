// types
import {TFilterData} from 'models/types';
import {IFilterData} from 'models/interfaces';

import React, {FC} from 'react';
import {filterData} from './filterData';
import {FilterItem} from './FilterItem';
import {FilterSearch} from './FilterSearch';

interface IProps {
  setFilter: (code: TFilterData) => void,
  setSearchQuery: (value: string) => void,
  filterBy: TFilterData,
}

export const Filter: FC<IProps> = ({
  setFilter,
  setSearchQuery,
  filterBy,
}) => {
  const renderFilter = (elem: IFilterData) => (
    <FilterItem
      key={elem.id}
      active={filterBy === elem.code}
      title={elem.title}
      onClick={() => setFilter(elem.code)}
    />
  );

  return (
    <aside className="page__content-sidebar sidebar">
      <ul className="sidebar__list list list--reset">
        <FilterSearch
            placeholder="search..."
            onChange={event => setSearchQuery(event.target.value)}
        />
        {filterData.map(renderFilter)}
      </ul>
    </aside>
  );
};
