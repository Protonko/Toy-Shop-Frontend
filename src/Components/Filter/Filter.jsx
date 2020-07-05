import React from 'react';
import {FilterItem} from './FilterItem';

export const Filter = ({setFilter, filterBy}) => (
    <aside className="page__content-sidebar sidebar">
        <ul className="sidebar__list list list--reset">
            <FilterItem
                active={filterBy === 'all'}
                title="All"
                onClick={() => setFilter('all')}
            />
            <FilterItem
                active={filterBy === 'low'}
                title="Price (low)"
                onClick={() => setFilter('low')}
            />
            <FilterItem
                active={filterBy === 'high'}
                title="Price (high)"
                onClick={() => setFilter('high')}
            />
        </ul>
    </aside>
);
