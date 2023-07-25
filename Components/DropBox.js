import { useRef } from "react";
import { View, Text } from "react-native";
import { useStateValue } from "../State";

export default DropBox = (props) => {
  const [state, dispatch] = useStateValue();
  const ref = useRef();
  return (
    <View
      ref={ref}
      testID="drop-box-view"
      style={{ ...props.dropBoxStyle, zIndex: -1 }}
      onLayout={() => {
        ref.current.measure((x, y, width, height, pageX, pageY) => {
          dispatch({ type: "setDropBoxStartPoint", payload: pageX });
          dispatch({ type: "setDropBoxEndPoint", payload: pageX + width });
          dispatch({ type: "setDropBoxVerticalStartPoint", payload: pageY });
          dispatch({
            type: "setDropBoxVerticalEndPoint",
            payload: pageY + height,
          });
        });
      }}
    >
      <Text
        style={{
          fontSize: 50,
          color: "black",
          textAlign: "center",
          position: "absolute",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};
