import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [math, setMath] = useState("");
  const [sign, setSign] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const calculate = () => {
    if (sign === "+") setMath(Number(firstNumber) + Number(secondNumber));
    if (sign === "-") setMath(Number(firstNumber) - Number(secondNumber));
    if (sign === "*") setMath(Number(firstNumber) * Number(secondNumber));
    if (sign === "%") setMath(Number(firstNumber) / Number(secondNumber));
  };

  return (
    <div className='App'>
      <>
        <h1>Calculator</h1>

        <form onSubmit={handleSubmit}>
          <input
            type='number'
            value={firstNumber}
            placeholder='Enter a value'
            onChange={(e) => {
              setFirstNumber(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setSign("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setSign("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setSign("*");
            }}
          >
            x
          </button>
          <button
            onClick={() => {
              setSign("%");
            }}
          >
            %
          </button>
          <input
            type='number'
            value={secondNumber}
            placeholder='Enter a value'
            onChange={(e) => {
              setSecondNumber(e.target.value);
            }}
          />
          <button onClick={calculate}>=</button> <span>{math}</span>
        </form>
      </>
    </div>
  );
}

export default App;
