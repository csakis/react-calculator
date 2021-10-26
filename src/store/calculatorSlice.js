import { createSlice } from "@reduxjs/toolkit";
import {layout} from "../layout";


const calculatorSlice =createSlice({
  name: "calculator",
  initialState: {
    layout: layout,
    result: "0",
    display: "0",
  },
  reducers: {
    buttonReducer: (state, action) => {
      const value = action.payload;
      switch (value) {
        case "0":
          state.result === "0" ? state.result : (state.result += "0");
          break;
        case "C":
          state.result = "0";
          state.display = "0";
          break;
        case "CE":
          if (state.result !== "0" && state.result.length >= 1) {
            if (state.result.length === 1) {
              //  if only one number left
              state.result = "0";
              break;
            }
            state.result = state.result.substr(0, state.result.length - 1);
          }
          break;
        case ".":
          if (state.result.includes(".")) {
            break; //if we already have a decimal point don't do anytihng
          }
          state.result === "0" ? (state.result = "0.") : (state.result += ".");
          break;
        case "=":
          try {
            state.display = eval(state.result);
          } catch {
            state.display = "ERR";
          }
          state.result = "0";
          break;

        default:
          state.result === "0"
            ? (state.result = value)
            : (state.result += value);
          break;
      }

    }
  }
})

export const {buttonReducer} = calculatorSlice.actions;
export default calculatorSlice.reducer