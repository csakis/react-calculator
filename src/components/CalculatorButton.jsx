import {useRef} from "react";
import {useDispatch} from "react-redux";
import {buttonReducer} from "../store/calculatorSlice";

function CalculatorButton(props) {
  const dispatch = useDispatch();
  const button = useRef(null);
  const buttonHandler = (value) => {
    dispatch(buttonReducer(value));
    button.current.blur();
  };

  return (
    <div className={`text-center col-sm-${props.button.width}`}>
      <div className="d-grid gap-1">
        <button
          ref={button}
          className={`btn btn-lg btn-${props.button.color}`}
          onClick={(e) => buttonHandler(e.target.innerText)}
        >
          {props.button.content}
        </button>
      </div>
    </div>
  );
}

export default CalculatorButton;
