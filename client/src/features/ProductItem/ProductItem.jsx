/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({product}) {
    return (
        <div className="card mt-5">        
            <div className="card-body">
                <h5 className="card-title text-center">{product.title}</h5>
                <i className="bi bi-pc"></i>
                <Link to={`/products/${product.id}`} className="btn btn-primary">Show</Link>
            </div>
        </div>  
    );
}

export default ProductItem;