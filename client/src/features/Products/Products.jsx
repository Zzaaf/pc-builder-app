/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

function Products({ products }) {
  return (
    <>
      <h1>Products</h1>

      <section className="d-flex">
        {products.length ? products.map((el) => <ProductItem key={el.id} product={el} />) : <h3>No data</h3>}
      </section>
    </>
  );
}

export default Products;
