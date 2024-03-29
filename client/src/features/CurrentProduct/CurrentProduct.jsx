/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';

function CurrentProduct({ products }) {
  const { id } = useParams();

  const currentProduct = products.find((el) => el.id === id);

  return (
    <h1>
      Current id:
      {' '}
      {currentProduct.id}
    </h1>
  );
}

export default CurrentProduct;
