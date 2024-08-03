import React from "react";
import './Filter.css';

const Filter = ({ filterData, category, setCategory }) => {

    const filterHandler = (title) => {
        setCategory(title);
    };

    return (
        <div className="filter">
            {filterData.map((data) => (
                <button
                    key={data.id}
                    onClick={() => filterHandler(data.title)}
                    className={`button-base transition-all duration-300 ${category === data.title ? 'button-active' : 'button-inactive'}`}
                >
                    {data.title}
                </button>
            ))}
        </div>
    );
};

export default Filter;

