/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';

function CurrentProduct({products}) {
    const {id} = useParams();

    const currentProduct = products.find(el => el.id === Number(id))

    return (
        <h1>Current id: {currentProduct.title}</h1>
    );
}

export default CurrentProduct;