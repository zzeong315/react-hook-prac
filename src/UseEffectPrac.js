import React, { useEffect, useState } from 'react';

const UseEffectPrac = () => {
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);

  const sayHello = () => console.log("Hello");
  useEffect(sayHello, [number]);

  return (
    <div>
      <h1>4. useEffect</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  )
}

export default UseEffectPrac;
