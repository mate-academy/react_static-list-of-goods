import React from 'react';
import './App.css';

const goodsFromServer = [
  { id: 1, name: 'Potato', color: 'red' },
  { id: 2, name: 'Pear', color: 'green' },
  { id: 3, name: 'Mellon', color: 'blue' },
  { id: 4, name: 'Ice cream', color: 'red' },
  { id: 5, name: 'Apple', color: 'green' },
  { id: 6, name: 'Bread', color: 'blue' },
  { id: 7, name: 'Fish', color: 'red' },
  { id: 8, name: 'Honey', color: 'green' },
  { id: 9, name: 'Jam', color: 'blue' },
  { id: 10, name: 'Garlic', color: 'red' },
  { id: 11, name: 'Dumplings', color: 'red' },
  { id: 12, name: 'Carrot', color: 'green' },
  { id: 13, name: 'Eggs', color: 'blue' },
];

const App = () => (
  <div className="App">
    <h1>Goods</h1>
    {goodsFromServer.length}
  </div>
);

export default App;
