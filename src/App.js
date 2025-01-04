import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(1);
  const [input, setInput] = useState(1);

  return (
    <div className="container">
      <div className="calculator">
        <p style={{ position: "absolute", right: 5, color: "blue" }}>
          {result}
        </p>
      </div>
    </div>
  );
}

export default App;
