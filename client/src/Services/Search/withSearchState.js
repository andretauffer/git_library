import React, { useReducer } from "react";

const initialState = {
  search: "",
  searchList: [],
  fullResult: {},
  sort: "",
  totalPages: "",
  page: "1",
  user: "",
  path: "repositories"
};

function searchReducer(state, action) {
  const { method, field, value, path } = action;

  const methods = {
    input: () => {
      return {
        ...state,
        [field]: value
      };
    },
    changeType: () => {
      return {
        ...state,
        [field]: value,
        searchList: [],
        totalPages: "",
        fullResult: {}
      };
    },
    updateList: () => {
      return {
        ...state,
        searchList: value.items,
        fullResult: value,
        totalPages: Math.ceil(value.total_count / 10)
      };
    },
    updateFeed: () => {
      return {
        ...state,
        searchList: value.items,
        fullResult: value,
        totalPages: Math.ceil(value.total_count / 10),
        path: value.path
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
