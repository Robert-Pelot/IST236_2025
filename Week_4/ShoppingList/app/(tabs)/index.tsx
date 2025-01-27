import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  Modal,
  Alert,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Item from "../../components/Item";
import ItemInputModal from "../../components/ItemInputModal";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
  // Create state management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState<
    { text: String; id: number }[]
  >([]);
  const [currentID, setCurrentID] = useState(0);

  // create modal screen handler functions
  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() {
    console.log("Closing the modal..."); // Log when the modal is closing
    setModalIsVisible(false); // Close the modal
    console.log("After going not visible...", modalIsVisible);
  }

  function addItemHandler(enteredItemText: string) {
    // Use functional updates to ensure correct values are used
    setShoppingItems((currentShoppingItems) => {
      const newItem = { text: enteredItemText, id: currentID };
      return [...currentShoppingItems, newItem];
    });
    // Increment the ID using the current state of the ID
    setCurrentID((prevID) => {
      const newID = prevID + 1;
      return newID;
    });
    // Close the modal
    endAddItemHandler();
  }

  function deleteItemHandler(id) {
    Alert.alert("Delete Item", "Are you sure you want to delete?", [
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
    ]);
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* Set status bar styling */}
        <StatusBar style="light" />
        {/* Set SafeAreaView Screen Container */}
        <SafeAreaView style={styles.appContainer}>
          {/* Set Title Container */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Shopping List</Text>
          </View>
          {/* Set add item button container */}
          <View style={styles.buttonContainer}>
            <Pressable
              android_ripple={{ color: "#B180F0" }}
              style={({ pressed }) => pressed && styles.pressedButton}
              onPress={startAddItemHandler}
            >
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>Add New Item</Text>
              </View>
            </Pressable>
          </View>
          {/* Set Items to Get Title Container */}
          <View style={styles.subTitleContainer}>
            <Text style={styles.subtitle}>Items to Get</Text>
          </View>
          {/* Set List of Items Container */}
          <View style={styles.listContainer}>
            <FlatList
              data={shoppingItems}
              keyExtractor={(item) => item.id.toString()} // Convert id to string
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

          <ItemInputModal
            onAddItem={addItemHandler}
            onCancel={endAddItemHandler}
            visible={modalIsVisible}
          />
        </SafeAreaView>
        )
      </GestureHandlerRootView>
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
  title: {
    fontSize: 40,
    color: "#5E09CC",
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  addButtonContainer: {},
  addButton: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 20,
    color: "#5E08CC",
  },
  pressedButton: {
    opacity: 0.8,
  },
  subtitle: {
    fontSize: 30,
    color: "#5E00CC",
  },
  subTitleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  listContainer: {
    flex: 7,
    width: "90%",
    alignItems: "center",
  },
  listText: {
    fontSize: 20,
    color: "black",
  },
});
