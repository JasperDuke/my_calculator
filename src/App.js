import { useEffect, useRef, useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";
function App() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");
  const [input, setInput] = useState("");
  const resultRef = useRef("");

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollLeft = resultRef.current.scrollWidth;
    }
  });

  const handleEvaluate = () => {
    try {
      const res = evaluate(expression);
      setResult(() => expression + "=" + res);
      setInput(res);
    } catch (error) {
      setResult("Error evaluating expression");
    }
  };

  const handleClick = (value) => {
    switch (value) {
      case "=":
        if (expression) handleEvaluate();
        break;
      case "AC":
        clearAll();
        break;
      default:
        handleInput(value);
        break;
    }
  };

  const handleInput = (value) => {
    if (isNaN(value)) {
      if (expression === "") return;
      if (expression.length > 0 && result.includes("=")) {
        setExpression(result.slice(result.indexOf("=") + 1) + value);
        setResult(result.slice(result.indexOf("=") + 1) + value);
        setInput(value);
        return;
      }
    }
    if (!isNaN(value) && !isNaN(expression[expression.length - 1])) {
      setInput((prev) => prev + value);
    } else setInput(value);

    setExpression((prev) => prev + value);
    setResult((prev) => prev + value);
  };

  const clearAll = () => {
    setResult("");
    setInput("");
    setExpression("");
  };

  return (
    <div className="container">
      <h1 className="title">Simple Calculator</h1>
      <div className="calculator-wrapper">
        <p className="result" ref={resultRef}>
          {result}
        </p>
        <p className="input">{input || 0}</p>
        <div className="calculator">
          <button className="span-two clear" onClick={() => handleClick("AC")}>
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
      <div className="scroll-box">
        <span className="name">Jasper Duke</span>
      </div>
    </div>
  );
}

export default App;
