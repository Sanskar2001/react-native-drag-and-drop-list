
## React Native Drag and Drop List
The Drag and Drop List with Drop Box is an intuitive and user-friendly interface that allows users to easily organize and manage items by dragging them from a list and dropping them into a designated drop box.

![Imgur](https://i.imgur.com/Rrxbw48.gif)

![Imgur](https://i.imgur.com/SDzNf0p.gif)

## Install

with npm

          npm install react-native-drag-and-drop-list
        


## How to Use

Take in consideration the following data passed to component DragAndDropList i.e. the array must be in form of key and value

           const data = [
            { key: 1, value:"Mango" },
            { key: 2, value: "Orange" },
            { key: 3, value: "Apple" },
            { key: 4, value: "Banana" },
            { key: 5, value: "Cherry" },
            { key: 6, value: "Watermelon" },
            { key: 7, value: "Grapes" },
            { key: 8, value: "Pineapple" },
            ]



## Props

#### All the props accepted are as follows:


| Name | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `data`      | `[]` | **Required**. an array that populates the list|
| `onDrop`      | `(item)=>void` | . a callback function that is called when user drops an item|
| `listItemStyle`      | `style` |  style properties that need to be applied on every item of list|
| `containerWidth`      | `number` | width of the container that contains draggable list and drop area|
| `dropBoxStyle`      | `style` | style properties that need to be applied on the dropbox|
| `listItemContainerStyle`      | `style` | style properties that need to be applied on the container containing all the list items|
| `listItemContainerStyle`      | `style` | style properties that need to be applied on the container containing all the list items|
| ` parentContainerStyle`      | `style` | style properties that need to be applied on the parent container containing both the list items and droppable area|




## Usage/Examples

```javascript
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";


import DragAndDropList from "react-native-drag-and-drop-list";
const data = [
  { key: 1, value: "Mango" },
  { key: 2, value: "Orange" },
  { key: 3, value: "Apple" },
  { key: 4, value: "Banana" },
  { key: 5, value: "Cherry" },
  { key: 6, value: "Watermelon" },
  { key: 7, value: "Grapes" },
  { key: 8, value: "Pineapple" },
];
export default function App() {
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <View style={styles.container}>
        <DragAndDropList
          data={data}
          onDrop={(item) => {
            console.log(item);
          }}
          listItemStyle={{
            backgroundColor: "black",
            width: "80%",
          }}
          containerWidth={300}
          listItemContainerStyle={{
            backgroundColor:"skyblue",
            width:"50%"
          }}
           parentContainerStyle={
            {
              marginStart:100,
              marginTop:100
            }
          }

          dropBoxTitle="Drop Here"
          dropBoxStyle={{
    
            width: "50%",
            marginStart:100,
            height: "30%",
            backgroundColor: "orange",
          }}
        />

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});


```


## Authors

- [Sanskar Atrey](https://github.com/Sanskar2001)

