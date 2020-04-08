import React, { useReducer } from "react";

const initialState = {
  search: "",
  searchList: [],
  fullResult: {},
  sort: "",
  totalPages: null,
  page: "1",
  user: "",
  path: "repositories",
  latestKeywords: [],
  spinner: false,
  error: ""
};

function searchReducer(state, action) {
  const { method, field, value, error } = action;

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
        totalPages: null,
        fullResult: {}
      };
    },
    updateList: () => {
      const total = value.total_count
        ? Math.ceil(value.total_count / 10)
        : null;
      return {
        ...state,
        searchList: value.items,
        fullResult: value,
        totalPages: total,
        spinner: false
      };
    },
    updateFeed: () => {
      const total = value.total_count
        ? Math.ceil(value.total_count / 10)
        : null;
      return {
        ...state,
        searchList: value.items,
        fullResult: value,
        totalPages: total,
        path: value.path,
        latestKeywords: value.keywords,
        spinner: false
      };
    },
    spinner: () => {
      return {
        ...state,
        spinner: true
      };
    },
    error: () => {
      return {
        ...state,
        error,
        spinner: false
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
