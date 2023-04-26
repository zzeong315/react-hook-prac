import React, { useEffect, useState } from 'react';

const useInput = (initialwords, validator) => {
  const [value, setValue] = useState(initialwords);
  const onChange = (event) => {
    const {target: {value}} = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
      console.log(value);
    }
  }

  return {value, onChange};
}


const UseInputPrac = () => {
  const validation = value => !value.includes("#") && !value.includes("%");
  const words = useInput("", validation);

  return (
    <div>
      <h1>2. useInput</h1>
      <input placeholder='anything...' {...words}/>
    </div>
  )
}
// {...name} or value={name.value} onChange={name.onChange}
export default UseInputPrac;
