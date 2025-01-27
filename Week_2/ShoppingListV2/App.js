import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Modal,
  Image,
  TextInput,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import Item from "./components/item.js";
import ItemInputModal from "./modals/iteminputModal.js";

export default function App() {
  // Create state management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState([]);

  const [currentID, setCurrentID] = useState(0);

  // Create modal screen handler functions
  function startAddItemHandler() {
    setModalIsVisible(true);
  }
  function endAddItemHandler() {
    setModalIsVisible(false);
  }
  function addItemHandler(enteredItemText) {
    setShoppingItems((currentShoppingItems) => [
      ...currentShoppingItems,
      { text: enteredItemText, id: currentID },
    ]);
    setCurrentID(currentID + 1);
    endAddItemHandler();
  }

  function deleteItemHandler(id){
    Alert.alert(
      "Delete Item",
      "Are you sure you want to delete?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          style: "default",
          onPress: () => {
            setShoppingItems((currentShoppingItems) => {
              return currentShoppingItems.filter((item) => item.id !== id);
            });
          },
        },
      ]
    );
  }

  return (
    <>
      {/* Set status bar styling */}
      <StatusBar style="light" />
      {/* Set safeareaview screen container */}
      <SafeAreaView style={styles.appContainer}>
        {/* Set title container */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Shopping List</Text>
        </View>
        {/* set add item button container */}
        <View style={styles.buttonContainer}>
          <Pressable
            // add the android ripple
            android_ripple={{ color: "#B180F0" }}
            // style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            // when pressed, open modal screen
            onPress={startAddItemHandler}
          >
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}> Add New Item</Text>
            </View>
          </Pressable>
        </View>
        {/* set items to get title container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>Items to Get</Text>
        </View>
        {/* set list of items container */}
        <View style={styles.listContainer}>
          <FlatList 
            data={shoppingItems}
            keyExtractor={(item, index) => {
              return item.id; 
            }}
            renderItem={(itemData) => {
              return (
                <Item 
                  text={itemData.item.text} 
                  id={itemData.item.id} 
                  onDeleteItem={deleteItemHandler}
                />
              );
            }}
          />
        </View>
        <ItemInputModal onAddItem={addItemHandler} onCancel={endAddItemHandler} visible={modalIsVisible} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1E085A",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  titleText: {
    fontSize: 40,
    color: "#5E08CC",
  },
  buttonContainer: {},
  addButton: {
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5E08CC",
  },
  pressedButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#5E08CC",
  },
  subtitleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  subtitleText: {
    fontSize: 30,
    color: "#5E08CC",
  },
  listContainer: {
    flex: 7,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  listText: {
    fontSize: 20,
    color: "black",
  },
});
