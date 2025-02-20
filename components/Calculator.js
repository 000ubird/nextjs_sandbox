import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleInputChange = (event, setter) => {
    const value = parseFloat(event.target.value) || 0;
    setter(value);
  };

  const calculate = (operator) => {
    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num2 === 0 ? 'Infinity' : num1 / num2);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>電卓アプリ</h1>
      <input type="number" value={num1} onChange={(e) => handleInputChange(e, setNum1)} />
      <input type="number" value={num2} onChange={(e) => handleInputChange(e, setNum2)} />
      <button onClick={() => calculate('+')}>+</button>
      <button onClick={() => calculate('-')}>-</button>
      <button onClick={() => calculate('*')}>*</button>
      <button onClick={() => calculate('/')}>/</button>
      <p>結果: {result}</p>
    </div>
  );
};

export default Calculator;