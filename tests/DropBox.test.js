import React from "react";
import { renderHook,render,fireEvent} from "@testing-library/react-native";
import DropBox from "../Components/DropBox";
import { StateProvider, initialState,useStateValue, reducer } from "../State";

test("DropBox should dispatch actions on layout event", () => {
  const { getByTestId } = render(
    <StateProvider reducer={reducer} initialState={initialState}>
      <DropBox title="Test Title" dropBoxStyle={{ width: 100, height: 100 }} />
    </StateProvider>
  );

  const dropBoxView = getByTestId("drop-box-view");
  dropBoxView.measure = jest.fn((callback) =>
    callback(10, 20, 100, 100, 200, 300)
  );

 
  dropBoxView.props.onLayout();



});






  
  
 
