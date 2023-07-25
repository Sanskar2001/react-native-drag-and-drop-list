import React from "react";
import { render } from "@testing-library/react-native";
import DragAndDropList from "../Components/DragAndDropList";

jest.mock("../State", () => {
    const { createContext, useContext, useReducer } = jest.requireActual("react");
    return {
      __esModule: true,
      StateContext: createContext(),
      StateProvider: ({ children }) => children,
      useStateValue: () => useReducer(jest.fn(), {
        dropBoxStartPoint: 0,
        dropBoxEndPoint: 0,
        containerStartPoint: 0,
        dropBoxVerticalStartPoint: 0,
        dropBoxVerticalEndPoint: 0,
      }),
    };
  });

test("FinalPack should render correctly", () => {
  const data = [
    { key: "1", value: "Item 1" },
    { key: "2", value: "Item 2" },
    { key: "3", value: "Item 3" },
  ];
  const onDropMock = jest.fn();
  const listItemStyle = { width: 100, height: 50, backgroundColor: "blue" };
  const dropBoxStyle = { backgroundColor: "red", width: 100, height: 50 };

  const { getByText, getByTestId } = render(
    <DragAndDropList
      data={data}
      onDrop={onDropMock}
      listItemStyle={listItemStyle}
      dropBoxStyle={dropBoxStyle}
      containerWidth={300}
    />
  );

 
});