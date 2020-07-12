import React from 'react';
import {FilterItem} from './FilterItem';
import {FilterSearch} from './FilterSearch';

export const Filter = ({setFilter, setSearchQuery, filterBy}) => (
    <aside className="page__content-sidebar sidebar">
        <ul className="sidebar__list list list--reset">
            <FilterSearch
                placeholder="search..."
                onChange={event => setSearchQuery(event.target.value)}
            />
            <FilterItem
                active={filterBy === 'ALL'}
                title="All"
                onClick={() => setFilter('ALL')}
            />
            <FilterItem
                active={filterBy === 'PRICE_LOW'}
                title="Price (low)"
                onClick={() => setFilter('PRICE_LOW')}
            />
            <FilterItem
                active={filterBy === 'PRICE_HIGH'}
                title="Price (high)"
                onClick={() => setFilter('PRICE_HIGH')}
            />
            <FilterItem
                active={filterBy === 'CATEGORY'}
                title="Category"
                onClick={() => setFilter('CATEGORY')}
            />
        </ul>
    </aside>
);
