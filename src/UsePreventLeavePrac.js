import React from 'react'

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  }
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);

  return {enablePrevent, disablePrevent};
}

const UsePreventLeavePrac = () => {
  const {enablePrevent, disablePrevent} = usePreventLeave();
  return (
    <div>
      <h1>8. usePreventLeave</h1>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  )
}

export default UsePreventLeavePrac;
