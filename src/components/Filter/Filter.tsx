import React, {FC} from 'react';
import {TFilterData} from 'typing/types';
import {IFilterData} from 'typing/interfaces';
import {filterData} from './filterData';
import {FilterItem} from './FilterItem';
import {FilterSearch} from './FilterSearch';

interface IFilterProps {
  setFilter: (code: TFilterData) => any, // TODO - убрать
  setSearchQuery: (value: string) => any, // TODO - убрать
  filterBy: TFilterData,
}

export const Filter: FC<IFilterProps> = ({
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
