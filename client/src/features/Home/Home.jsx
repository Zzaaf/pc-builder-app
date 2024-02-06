/* eslint-disable react/prop-types */
import ProductItem from '../ProductItem/ProductItem';
import { v4 as uuidv4 } from 'uuid';

function Home({products, setProduct}) {

    const demoProduct = {
        id: uuidv4(),
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
            <button onClick={() => setProduct((prevState) => [...prevState, demoProduct])}>Add new build</button>

            <section>
                {products && products.map(el => <ProductItem key={el.id} product={el}/>)}
            </section>
        </>
    );
}

export default Home;