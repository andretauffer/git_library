import React, { useReducer } from "react";

const initialState = {
  search: "",
  searchList: [],
  fullResult: {},
  sort: ""
};

function searchReducer(state, action) {
  const { method, field, value } = action;

  const methods = {
    input: () => {
      return {
        ...state,
        [field]: value
      };
    },
    updateList: () => {
      return {
        ...state,
        searchList: value.items,
        fullResult: value
      };
    },
    default: () => {
      return {
        ...state
      };
    }
  };

  return method ? methods[method]() : methods.default();
}

export default Component => {
  const StateContainer = ({ ...props }) => {
    const [state, dispatch] = useReducer(searchReducer, initialState);
    return (
      <Component searchState={state} searchDispatch={dispatch} {...props} />
    );
  };
  return StateContainer;
};
