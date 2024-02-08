/* eslint-disable react/prop-types */
import ProductItem from '../ProductItem/ProductItem';
import { v4 as uuidv4 } from 'uuid';

function Home({products, setProduct}) {

    const demoProduct = {
        id: uuidv4(),
        title: 'Untitled', 
        processor: 'none', 
        motherboard: 'none',
        cpuCooler: 'none',
        case: 'none',
        graphicsCard: 'none',
        ram: 'none', 
        storage: 'none',
        caseCooler: 'none',
        powerSupply: 'none',
    }

    return (
        <>
            <h1>Home</h1>


            <section>
                {products && products.map(el => <ProductItem key={el.id} product={el}/>)}
            </section>

            <form action="" method="post">

                <div className="mb-3">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <button className="mt-3" onClick={() => setProduct((prevState) => [...prevState, demoProduct])}>Add new build</button>
                </div>
            </form>
        </>
    );
}

export default Home;