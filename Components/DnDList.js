import { View} from "react-native";
import Draggable from "./Draggable";
import { useStateValue } from "../State";
import { useRef } from "react";
export default DnDList = (props) => {
  
  const [state, dispatch] = useStateValue();
  const ref = useRef();

  return (
    <View
      style={ props.listItemContainerStyle }
      ref={ref}
      onLayout={() => {
        ref.current.measure((x, y, width, height, pageX, pageY) => {
          dispatch({ type: "setContainerStartPoint", payload: pageX });
        });
      }}
    >
      {props.data.map((item) => (
        <View key={item.key}>
          <Draggable
            item={item}
            onDrop={props.onDrop}
            listItemStyle={props.listItemStyle}
            dropBoxEndPoint={props.dropBoxEndPoint}
          ></Draggable>
        </View>
      ))}
    </View>
  );
};
