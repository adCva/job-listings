import React from 'react';

function Filter() {
    return (
        <div className="filter-container">
            <div className="filter-tags-container">
                <div>
                    <p>Frontend</p>
                    <button className="filter-btn">X</button>
                </div>
                <div>
                    <p>CSS</p>
                    <button className="filter-btn">X</button>
                </div>
                <div>
                    <p>JavaScript</p>
                    <button className="filter-btn">X</button>
                </div>
            </div>
            <button className="clear-btn">Clear</button>
        </div>
    )
}

export default Filter;