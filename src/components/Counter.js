import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    //Changed the statement below to the recommended react syntax that uses the arrow function.
    setCount((count) => count + 1);
  }
  
  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
