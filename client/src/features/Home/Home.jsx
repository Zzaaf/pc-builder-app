/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';

function Home({products, setProduct}) {

    const demoProduct = {
        id: 1,
        title: 'Demo', 
        processor: 'Demo', 
        motherboard: 'Demo',
        cpuCooler: 'Demo',
        case: 'Demo',
        graphicsCard: 'Demo',
        ram: 'Demo', 
        storage: 'Demo',
        caseCooler: 'Demo',
        powerSupply: 'Demo'
    }

    return (
        <>
            <h1>Home</h1>
            <button onClick={() => setProduct((prevState) => [...prevState, demoProduct])}>Add</button>

            <section>
                {products && products.map(el => <ProductItem key={el.id} product={el}/>)}
            </section>
        </>
    );
}

export default Home;