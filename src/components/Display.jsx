import {useSelector} from "react-redux";

function Display() {
  const calculator = useSelector((state) => state.calculator);
  return (
    <div className="bg-black bg-gradient text-white text-end p-2 mb-2">
      <h5>{calculator.display}</h5>
    </div>
  );
}

export default Display;
