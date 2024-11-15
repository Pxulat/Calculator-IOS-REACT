import { useState } from 'react';
import { Backspace, Divide, Minus, Plus, X } from 'lucide-react';

export const useCalculator = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleNumberClick = (number) => {
    setCurrentNumber((prev) => prev + number);
  };

  const handleOperationClick = (op) => {
    if (currentNumber === '') return;
    setPreviousNumber(currentNumber);
    setCurrentNumber('');
    setOperation(op);
  };

  const handleEqualsClick = () => {
    if (!previousNumber || !currentNumber || !operation) return;

    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    let result;

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 0; // Maneja división por cero
        break;
      default:
        result = 0;
    }

    setCurrentNumber(result.toString());
    setPreviousNumber('');
    setOperation('');
  };

  const handleClearClick = () => {
    setCurrentNumber('');
    setPreviousNumber('');
    setOperation('');
  };

  const handleToggleSignClick = () => {
    if (currentNumber) {
      setCurrentNumber((prev) => (parseFloat(prev) * -1).toString());
    }
  };

  const handlePercentageClick = () => {
    if (currentNumber) {
      setCurrentNumber((prev) => (parseFloat(prev) / 100).toString());
    }
  };

  return {
    currentNumber,
    handleNumberClick,
    handleOperationClick,
    handleEqualsClick,
    handleClearClick,
    handleToggleSignClick,
    handlePercentageClick,
  };
};
