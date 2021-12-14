import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFilterTag, removeAllFilterTags } from '../Features/filterSlice';

function Filter() {
    const filters = useSelector(state => state.filters.filterTags)
    const dispatch = useDispatch();

    const removeTag = (tagIn) => {
        dispatch(removeFilterTag({tagIndex: tagIn}));
    };


    const removeAllTags = () => {
        dispatch(removeAllFilterTags());
    };


    return (
        <div className="filter-container">
            <div className="filter-tags-container">
                {filters.map((filterTag, index) => (
                    <div key={index}>
                        <p>{filterTag}</p>
                        <button className="filter-btn" onClick={() => removeTag(index)}>X</button>
                    </div>
                ))}
            </div>
            <button className="clear-btn" onClick={removeAllTags}>Clear</button>
        </div>
    )
}

export default Filter;