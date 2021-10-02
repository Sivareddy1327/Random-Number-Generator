import React from "react";
import { useDispatch } from "react-redux";
import { addNumbers, removeAll, plusTwo } from "../../Actions/NumbersActions";

const NumbersControl = (props) => {
  const dispatch = useDispatch();

  const handleGenerate = () => {
    const randomNumber = Math.round(Math.random() * 100);
    const num = {
      id: Number(new Date()),
      value: randomNumber,
    };
    dispatch(addNumbers(num));
  };

  const handleplustwo = () => {
    dispatch(plusTwo());
  };

  const handleremoveall = () => {
    dispatch(removeAll());
  };

  return (
    <div>
      <button onClick={handleGenerate}>Generate</button>
      <button onClick={handleplustwo}>+2</button>
      <button onClick={handleremoveall}>Remove All</button>
    </div>
  );
};

export default NumbersControl;
