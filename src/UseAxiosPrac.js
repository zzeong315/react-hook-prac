import React from 'react';
import useAxios from './useAxios';

const UseAxiosPrac = () => {
  const { loading, error, data, refetch } = useAxios({url: "https://yts.mx/api/v2/list_movies.json"})
  console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`);

  return (
    <div>
      <h1>15. useAxios</h1>
      <h2>{data && data.status}</h2>
      <h3>{loading && "Loading"}</h3>
      <button onClick={refetch}>Refetch</button>
    </div>
  )
}

export default UseAxiosPrac;
