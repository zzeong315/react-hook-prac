import React, { useEffect, useState } from 'react';

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if(typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }
  }, []);
  return status;
}

const UseNetworkPrac = () => {
  const handleNetworkChange = online => {
    console.log(online ? "we just went online" : "we are offline now");
  }
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>11. useNetwork</h1>
      <h2>{onLine? "online" : "offline"}</h2>
    </div>
  )
}

export default UseNetworkPrac;
