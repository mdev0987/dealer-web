import React, { Component } from 'react';

const CompanyItem = ({ item }) => {
    return (
        <div className="search-item" id="searchitem">
            <div>
                <div className="company-info">
                    <div className="company-name">{item.name}</div>
                    <div className="time">12:35</div>
                </div>
                <div style={{ display: 'flex', marginTop: '8px' }}>
                    <div className="product-name">Product Name: {item.productName}</div>
                </div>
                <div style={{ display: 'flex', marginTop: '4px' }}>
                    <div className="delivery">Delivery Date: 12/03/18</div>
                </div>
            </div>
        </div>
    );
}
export default CompanyItem;