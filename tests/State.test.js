import React from "react";
import { renderHook, act } from "@testing-library/react-native";

import {
  StateProvider,
  StateContext,
  initialState,
  reducer,
  useStateValue,
} from "../State";

test("StateProvider should provide the correct initial state and dispatch functions", () => {
  const wrapper = ({ children }) => (
    <StateProvider reducer={reducer} initialState={initialState}>
      {children}
    </StateProvider>
  );

  const { result } = renderHook(() => useStateValue(), { wrapper });

  const [state, dispatch] = result.current;
  expect(state).toEqual(initialState);
  expect(typeof dispatch).toBe("function");
});

test("reducer should update the state correctly", () => {
 
  const testState = {
    dropBoxStartPoint: 0,
    dropBoxEndPoint: 0,
    containerStartPoint: 0,
    dropBoxVerticalStartPoint: 0,
    dropBoxVerticalEndPoint: 0,
  };

  
  const setDropBoxStartPointAction = {
    type: "setDropBoxStartPoint",
    payload: 10,
  };
  expect(reducer(testState, setDropBoxStartPointAction)).toEqual({
    ...testState,
    dropBoxStartPoint: 10,
  });

 
  const setDropBoxEndPointAction = {
    type: "setDropBoxEndPoint",
    payload: 20,
  };
  expect(reducer(testState, setDropBoxEndPointAction)).toEqual({
    ...testState,
    dropBoxEndPoint: 20,
  });

  const setContainerStartPointAction = {
    type: "setContainerStartPoint",
    payload: 30,
  };
  expect(reducer(testState, setContainerStartPointAction)).toEqual({
    ...testState,
    containerStartPoint: 30,
  });

  const setDropBoxVerticalStartPointAction = {
    type: "setDropBoxVerticalStartPoint",
    payload: 40,
  };
  expect(reducer(testState, setDropBoxVerticalStartPointAction)).toEqual({
    ...testState,
    dropBoxVerticalStartPoint: 40,
  });

  const setDropBoxVerticalEndPointAction = {
    type: "setDropBoxVerticalEndPoint",
    payload: 50,
  };

  expect(reducer(testState, setDropBoxVerticalEndPointAction)).toEqual({
    ...testState,
    dropBoxVerticalEndPoint: 50,
  });

  const defaultAction = {
    type: "default",
  };
  expect(reducer(testState, defaultAction)).toEqual({
    ...testState,
  });
});
