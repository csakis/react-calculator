import {useSelector} from "react-redux";
import CalculatorButton from "./CalculatorButton";

function Calculator() {
  const calculator = useSelector((state) => {
    return state.calculator;
  });
  return (
    <div>
      {calculator.layout.map((row, index1) => {
        return (
          <div key={index1} className="row g-1 mb-1">
            {row.map((button, index2) => {
              return (
                <CalculatorButton
                  key={index1 * index2 + index1 + index2}
                  button={button}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Calculator;
