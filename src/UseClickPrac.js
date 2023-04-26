import React, { useEffect, useRef } from 'react'

const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    }
  },[])
  return element;
}

const UseClickPrac = () => {
  const sayHello = () => console.log("Hello there");
  const title = useClick(sayHello);
  return (
    <div>
      <h1>6. useClick</h1>
      <h2 ref={title}>Hi</h2>
    </div>
  )
}

export default UseClickPrac;
