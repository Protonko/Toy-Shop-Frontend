import React from 'react';
import PropTypes from 'prop-types';
import {filterData} from './filterData';
import {FilterItem} from './FilterItem';
import {FilterSearch} from './FilterSearch';

export const Filter = ({setFilter, setSearchQuery, filterBy}) => {
  return (
    <aside className="page__content-sidebar sidebar">
      <ul className="sidebar__list list list--reset">
        <FilterSearch
            placeholder="search..."
            onChange={event => setSearchQuery(event.target.value)}
        />
        {filterData.map((elem, index) => (
          <FilterItem
          key={index}
          active={filterBy === elem.code}
          title={elem.title}
          onClick={() => setFilter(elem.code)}
          />
          ))}
      </ul>
    </aside>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func,
  setSearchQuery: PropTypes.func,
  filterBy: PropTypes.string,
};
