import { useCalculator } from './calculatorLogic';
import { Divide, Minus, Plus, X } from 'lucide-react';

const Calculator = () => {
  const {
    currentNumber,
    handleNumberClick,
    handleOperationClick,
    handleEqualsClick,
    handleClearClick,
    handleToggleSignClick,
    handlePercentageClick,
  } = useCalculator();

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow-md">
      {/* Display */}
      <div className="flex justify-end p-4 text-4xl font-mono">
        {currentNumber || '0'}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-4">
        <button className="p-4 bg-gray-200 rounded-lg" onClick={handleClearClick}>
          C
        </button>
        <button className="p-4 bg-gray-200 rounded-lg" onClick={handleToggleSignClick}>
          +/-
        </button>
        <button className="p-4 bg-gray-200 rounded-lg" onClick={handlePercentageClick}>
          %
        </button>
        <button
          className="p-4 bg-orange-500 text-white rounded-lg"
          onClick={() => handleOperationClick('/')}
        >
          <Divide className="w-6 h-6 mx-auto" />
        </button>
        {['7', '8', '9'].map((num) => (
          <button
            key={num}
            className="p-4 bg-gray-200 rounded-lg"
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </button>
        ))}
        <button
          className="p-4 bg-orange-500 text-white rounded-lg"
          onClick={() => handleOperationClick('*')}
        >
          <X className="w-6 h-6 mx-auto" />
        </button>
        {['4', '5', '6'].map((num) => (
          <button
            key={num}
            className="p-4 bg-gray-200 rounded-lg"
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </button>
        ))}
        <button
          className="p-4 bg-orange-500 text-white rounded-lg"
          onClick={() => handleOperationClick('-')}
        >
          <Minus className="w-6 h-6 mx-auto" />
        </button>
        {['1', '2', '3'].map((num) => (
          <button
            key={num}
            className="p-4 bg-gray-200 rounded-lg"
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </button>
        ))}
        <button
          className="p-4 bg-orange-500 text-white rounded-lg"
          onClick={() => handleOperationClick('+')}
        >
          <Plus className="w-6 h-6 mx-auto" />
        </button>
        <button
          className="col-span-2 p-4 bg-gray-200 rounded-lg"
          onClick={() => handleNumberClick('0')}
        >
          0
        </button>
        <button
          className="p-4 bg-gray-200 rounded-lg"
          onClick={() => handleNumberClick('.')}
        >
          .
        </button>
        <button
          className="p-4 bg-orange-500 text-white rounded-lg"
          onClick={handleEqualsClick}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
