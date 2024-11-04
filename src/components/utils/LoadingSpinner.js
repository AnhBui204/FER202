
import React from 'react';
import './loading.css'; 

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading, please wait...</p>
        </div>
    );
};

export default LoadingSpinner;
