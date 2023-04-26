import React, { useEffect, useState } from 'react';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  })
  const onScroll = () => {
    setState({y: window.scrollY, x: window.scrollX});
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  return state;
}

const UseScrollPrac = () => {
  const {y} = useScroll();
  return (
    <div style={{height: "20vh"}}>
      <h1>12. useScroll</h1>
      <h2 style={{postion: "fixed", color: y > 700 ? "red" : "blue"}}>Hi</h2>
    </div>
  )
}

export default UseScrollPrac;
