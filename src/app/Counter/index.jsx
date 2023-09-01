
"use client"

import { useState } from "react";
import classes from './index.module.css'

const Counter = () => {
  const [harchi, setHarchi] = useState(100);

  const handleClick = () => {
    setHarchi(harchi+1);
  }
  return (
    <>
      <h1>Counter</h1>
      <button className={classes.primary} onClick={handleClick}>ADD</button>
      <h3>
        Count: <span>{harchi}</span>
      </h3>
    </>
  );
};

export default Counter;
