import React from 'react';
import { useState } from 'react';

export default () => {
  const [counter, set] = useState(0);
  return (
    <>
      <h2>Probando que los estados funcionen</h2>
      <h2>{counter}</h2>
      <button onClick={() => set((c) => c + 1)}>Contar</button>
    </>
  );
};
