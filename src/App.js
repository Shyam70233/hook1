import React from 'react';
import './style.css';
import { useState } from 'react';
export default function App() {
  const [x, setx] = useState(0);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <h3>Value : {x} </h3>
      <button onClick={() => setx(x + 1)}>+</button>
      <button onClick={() => setx(x - 1)}>-</button>
      <button onClick={() => setx(0)}>0</button>
    </div>
  );
}
