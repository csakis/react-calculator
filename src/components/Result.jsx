import {useSelector} from "react-redux";

function Result() {
  const calculator = useSelector((state) => state.calculator);
  return (
    <div className="bg-dark bg-gradient text-white p-2 mb-3 text-end">
      <h4>{calculator.result}</h4>
    </div>
  );
}

export default Result;
