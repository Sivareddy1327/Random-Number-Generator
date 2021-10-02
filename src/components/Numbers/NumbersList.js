import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, remove } from "../../Actions/NumbersActions";

const NumbersList = (props) => {
  const dispatch = useDispatch();
  const numbers = useSelector((state) => {
    return state.numbers;
  });

  const handledecrement = (id) => {
    dispatch(decrement(id));
  };

  const handleincrement = (id) => {
    dispatch(increment(id));
  };

  const handleremove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <ul>
        {numbers.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.value}
              <button
                onClick={() => {
                  handledecrement(ele.id);
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  handleincrement(ele.id);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  handleremove(ele.id);
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NumbersList;
