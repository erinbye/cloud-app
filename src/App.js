import "./App.css";
import React, { useState } from "react";

const numKey = "number-key";

function App() {
  const [number, setNumber] = useState(
    localStorage.getItem(numKey) ? parseInt(localStorage.getItem(numKey)) : 0
  );
  const [ready, setReady] = useState(false);

  const reset = () => {
    setNumber(0);
    localStorage.setItem(numKey, 0);
    setReady(false);
  };

  const add = () => {
    const newNum = number + 1;
    setNumber(newNum);
    localStorage.setItem(numKey, newNum);
  };

  return (
    <div className="container">
      {ready ? (
        <div>
          <button className="click-button" onClick={add}>
            How many nits could a nitin nit if a nitin could nit?
          </button>
          <p className="text">{number}</p>
          <button className="reset-button" onClick={reset}>
            Reset
          </button>
        </div>
      ) : (
        <div>
          <p className="text">ARE YOU READY TO NIT?</p>
          <button className="start-button" onClick={() => setReady(true)}>
            YEAH!
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
