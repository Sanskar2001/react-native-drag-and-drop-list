import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";
import { useStateValue } from "../State";

const Draggable = (props) => {
  const [pan, setPan] = useState(new Animated.ValueXY());
  const [showDraggable, setShowDraggable] = useState(true);

  const [dropBoxEndPoint, setDropBoxEndPoint] = useState(props.dropBoxEndPoint);
  const [state, dispatch] = useStateValue();

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: (e, gesture) => {
        pan.setValue({ x: gesture.dx, y: gesture.dy });
      },
      useNativeDriver: true,
      onPanResponderRelease: (e, gesture) => {
        if (isDropArea(gesture)) {
          props.onDrop(props.item);
          setShowDraggable(false);
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            friction: 5,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const isDropArea = (gesture) => {
    const windowWidth = Dimensions.get("window").width;

    return (
      gesture.moveX > state.dropBoxStartPoint &&
      gesture.moveX > state.containerStartPoint &&
      gesture.moveX < state.dropBoxEndPoint &&
      gesture.moveY > state.dropBoxVerticalStartPoint &&
      gesture.moveY < state.dropBoxVerticalEndPoint
    );
  };

  const panStyle = {
    transform: pan.getTranslateTransform(),
  };

  return (
    <View testID="draggable-box">
      <Animated.View
        {...panResponder.panHandlers}
        style={showDraggable ? [panStyle, { zIndex: 100 }] : styles.invisible}
      >
        <View style={props.listItemStyle}>
          <Text style={styles.codeItem}>{props.item.value}</Text>
        </View>
      </Animated.View>

      <View
        style={{
          ...props.listItemStyle,
          backgroundColor: "grey",
          position: "absolute",
          zIndex: 0,
        }}
      >
        <Text style={styles.codeItem}>{props.item.value}</Text>
      </View>
    </View>
  );
};

export default Draggable;

let styles = StyleSheet.create({
  box: {
    backgroundColor: "#0E86D4",
    width: "100%",
    height: 60,
    marginTop: 10,

    zIndex: 100,
  },
  draggableBox: {
    backgroundColor: "white",
    width: "100%",
    height: 60,
    marginTop: 10,

    zIndex: 100,
  },
  invisible: {
    opacity: 0,
  },
  codeItem: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },
});
