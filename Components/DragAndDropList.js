import { useRef, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import DnDList from "./DnDList";
import DropBox from "./DropBox";
import { initialState, reducer, StateProvider } from "../State";
export default DragAndDropList = (props) => {
  const [dropBoxEndPoint, setDropBoxEndPoint] = useState(0);

  const safeListItemStyle =
    props.listItemStyle === undefined
      ? styles.defaultListItem
      : {
          ...props.listItemStyle,
          justifyContent: "center",
          minHeight: 60,
          marginTop: 10,
          zIndex: 100,
        };

  return (
    <View
      style={{
        flexDirection: "row",
        width: props.containerWidth,
        ...props.parentContainerStyle
      }}
    >
      <StateProvider
        value={initialState}
        initialState={initialState}
        reducer={reducer}
      >
        <DnDList
          dropBoxVisibleAfterDrop={props.dropBoxVisibleAfterDrop}
          data={props.data}
          onDrop={props.onDrop}
          listItemContainerStyle={props.listItemContainerStyle}
          listItemStyle={safeListItemStyle}
        />

        <DropBox dropBoxStyle={props.dropBoxStyle} title={props.dropBoxTitle} />
      </StateProvider>
    </View>
  );
};

// styled components 
const styles = StyleSheet.create({
  defaultListItem: {
    backgroundColor: "white",
    width: "100%",
    height: 60,
    marginTop: 10,
    zIndex: 100,
  },
});
