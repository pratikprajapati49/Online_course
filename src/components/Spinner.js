import React from "react";
import './Spinner.css';

const Spinner = () => {
    return (
        <div className="t-spin">
            <div className="spinner"></div>
            <p className="load">Loading.....</p>
        </div>
    );
};

export default Spinner;
