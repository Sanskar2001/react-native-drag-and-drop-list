import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);

export const reducer = (state, action) => {
  switch (action.type) {
    case "setDropBoxStartPoint": {
      state.dropBoxStartPoint = action.payload;

      return state;
    }

    case "setDropBoxEndPoint": {
      state.dropBoxEndPoint = action.payload;

      return state;
    }

    case "setContainerStartPoint": {
      state.containerStartPoint = action.payload;
      return state;
    }

    case "setDropBoxVerticalStartPoint": {
      state.dropBoxVerticalStartPoint = action.payload;
      return state;
    }

    case "setDropBoxVerticalEndPoint": {
      state.dropBoxVerticalEndPoint = action.payload;
      return state;
    }

    default:
      return state;
  }
};

export const initialState = {
  dropBoxStartPoint: 0,
  dropBoxEndPoint: 0,
  containerStartPoint: 0,
  dropBoxVerticalStartPoint: 0,
  dropBoxVerticalEndPoint: 0,
};
