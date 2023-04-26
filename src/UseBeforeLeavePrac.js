import React, { useEffect } from 'react';

const useBeforeLeave = onBefore => {
  useEffect(() => {
    if (typeof onBefore === "function") {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    } else {
      return;
    }
  },[])
  const handle = event => {
    const {clientY} = event;
    if (clientY <= 0) {
      onBefore();
    }
  }

}

const UseBeforeLeavePrac = () => {
  const AskBeforeLeave = () => console.log("Are you really leaving now?");
  useBeforeLeave(AskBeforeLeave);
  return (
    <div>
      <h1>9. useBeforeLeave</h1>
    </div>
  )
}

export default UseBeforeLeavePrac
