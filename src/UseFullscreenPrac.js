import React, { useRef } from 'react';

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      };
    };
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    };
  }
  return {element, triggerFull, exitFull};
}

const UseFullscreenPrac = () => {
  const onFulls = isFull => {
    console.log(isFull ? "We are full" : "We are small");
  }
  const {element, triggerFull, exitFull} = useFullscreen(onFulls);
  return (
    <div>
      <h1>13. useFullscreen</h1>
      <div ref={element}>
        <img 
        src='https://images.unsplash.com/photo-1509817177816-ca503fa03f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80' />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  )
}

export default UseFullscreenPrac;
