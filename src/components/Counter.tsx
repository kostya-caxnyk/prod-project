import React, { useState } from "react";

import styles from "./Counter.module.scss";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>Counter</div>
      <h1>{counter}</h1>
      <button className={styles.button} onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
    </>
  );
}
