import "./App.css";
import React, { useState } from "react";

function App() {
  const [ready, setReady] = useState(false);
  const [number, setNumber] = useState(0);
  return (
    <div className="container">
      {ready ? (
        <div>
          <button
            className="click-button"
            onClick={() => setNumber(number + 1)}
          >
            How many nits could a nitin nit if a nitin could nit?
          </button>
          <p className="text">{number}</p>
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
