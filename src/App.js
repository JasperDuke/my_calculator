import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const [operator, setOperator] = useState(null);
  const operators = ["+", "-", "*", "/"];

  const handleClick = (value) => {
    setResult((prev) => prev + value);
    if (!isNaN(value)) {
      setInput((prev) => prev + value);
    } else if (operators.includes(value)) {
      if (input === "") {
        return;
      }
      setPrevInput(input);
      setOperator(value);
      setInput("");
    } else if (value === "=") {
      if (input !== "") {
        try {
          const calcResult = String(eval(prevInput + operator + input));
          setInput(calcResult);
          setResult((prev) => prev + calcResult);
        } catch (error) {
          setInput("Error");
        }
      }
    } else if (value === "AC") {
      setInput("");
      setPrevInput("");
      setOperator(null);
    }
  };

  const clearAll = () => {
    setResult("");
    setPrevInput("");
    setInput("");
    setOperator(null);
  };

  return (
    <div className="container">
      <div className="calculator-wrapper">
        <p className="result">{result}</p>
        <p className="input">{input}</p>
        <div className="calculator">
          <button className="span-two clear" onClick={clearAll}>
            AC
          </button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>x</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button className="span-row-two" onClick={() => handleClick("=")}>
            =
          </button>
          <button className="span-two" onClick={() => handleClick("0")}>
            0
          </button>
          <button onClick={() => handleClick(".")}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
