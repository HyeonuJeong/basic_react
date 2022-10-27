import React from 'react';
import { useState } from 'react';

function Counter() {

  const [num,setNumber]=useState(0);

  const inc=()=>{
    setNumber(prevNumber=>prevNumber+1)
  }

  const dec=()=>{
    setNumber(num-1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
    </div>
  );
}

export default Counter;