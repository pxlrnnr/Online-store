import React from 'react';
import { connect } from 'react-redux';
import SingleItem from './SingleItem';
import getVisibleItems from '../selectors/items';
import ItemsListFilter from './ItemsListFilter';

const ItemsList = (props) => (
    <div>
        <h1>Item List</h1>
        <ItemsListFilter />
        {props.items.map((item) => {
            return <SingleItem key={item.id} {...item} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        items: getVisibleItems(state.items, state.filters)
    }
};

export default connect(mapStateToProps)(ItemsList);
