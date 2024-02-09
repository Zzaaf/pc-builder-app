/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Toast from '../Toast/Toast';

function Home({ setProduct }) {
  const [title, setTitle] = useState('Untitled');
  const [processor, setProcessor] = useState('None');
  const [motherboard, setMotherboard] = useState('None');
  const [cpuCooler, setCpuCooler] = useState('None');
  const [computerCase, setComputerCase] = useState('None');
  const [graphicsCard, setGraphicsCard] = useState('None');
  const [ram, setRam] = useState('None');
  const [storage, setStorage] = useState('None');
  const [caseCooler, setCaseCooler] = useState('None');
  const [powerSupply, setPowerSupply] = useState('None');
  const [show, setShow] = useState(false);

  const newProduct = {
    id: uuidv4(),
    title,
    processor,
    motherboard,
    cpuCooler,
    computerCase,
    graphicsCard,
    ram,
    storage,
    caseCooler,
    powerSupply,
  };

  return (
    <>
      <h1>Home</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setProduct((prevState) => [...prevState, newProduct]);
        setShow(true);
      }}
      >
        <div className="mb-3">
          <input type="text" onChange={({ target }) => setTitle(target.value)} placeholder="Title" className="form-control" />
          <input type="text" onChange={({ target }) => setProcessor(target.value)} placeholder="Processor" className="form-control mt-1" />
          <input type="text" onChange={({ target }) => setMotherboard(target.value)} placeholder="Motherboard" className="form-control mt-1" />
          <input type="text" onChange={({ target }) => setCpuCooler(target.value)} placeholder="CPU Cooler" className="form-control mt-1" />
          <input type="text" onChange={({ target }) => setComputerCase(target.value)} placeholder="Case" className="form-control mt-1" />
          <input type="text" onChange={({ target }) => setGraphicsCard(target.value)} placeholder="Graphics Card" className="form-control mt-1" />
          <input type="text" onChange={({ target }) => setRam(target.value)} placeholder="RAM" className="form-control mt-1" />
          <input type="text" onChange={({ target }) => setStorage(target.value)} placeholder="Storage" className="form-control mt-1" />
          <input type="text" onChange={({ target }) => setCaseCooler(target.value)} placeholder="Case Cooler" className="form-control mt-1" />
          <input type="text" onChange={({ target }) => setPowerSupply(target.value)} placeholder="Power Supply" className="form-control mt-1" />
          <button type="submit" className="mt-3">Add new build</button>
        </div>
      </form>

      <Toast show={show} />
    </>
  );
}

export default Home;
