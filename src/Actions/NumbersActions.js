export const addNumbers = (randNum) => {
  return {
    type: "ADD_NUMBER",
    payload: randNum,
  };
};

export const plusTwo = () => {
  return {
    type: "PLUS_TWO",
  };
};

export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};

export const decrement = (id) => {
  return {
    type: "DECREMENT",
    payload: id,
  };
};

export const increment = (id) => {
  return {
    type: "INCREMENT",
    payload: id,
  };
};

export const remove = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};
