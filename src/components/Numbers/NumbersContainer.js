import React from "react";
import { useSelector } from "react-redux";
import numbersReducer from "../../Reducers/numbersReducers";
import NumbersControl from "./NumbersControl";
import NumbersList from "./NumbersList";

const NumbersContainer = (props) => {
  const numbers = useSelector((state) => {
    return state.numbers;
  });
  // sum functionality
  const numsum = () => {
    let sum = 0;
    numbers.forEach((ele) => {
      sum += ele.value;
    });
    return sum;
  };
  return (
    <div>
      <h2>
        Listing-{numbers.length},Sum-{numsum()}
      </h2>
      <NumbersList />
      <NumbersControl />
    </div>
  );
};

export default NumbersContainer;
