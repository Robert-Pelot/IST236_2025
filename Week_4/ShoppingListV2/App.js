import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import Item from "./components/Item";
import ItemInputModal from "./modals/ItemInputModal";

export default function App() {
  // create state management variables
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
      {/* Set status bar styling */}
      <StatusBar style="light" />
      {/* Set safeareaview screen container */}
      <SafeAreaView style={styles.appContainer}>
        {/* Set Title View */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Shopping List</Text>
        </View>

        {/* Set add item button container */}
        <View style={styles.buttonContainer}>
          <Pressable
            android_ripple={{ color: "#5E08CC" }}
            style={({ pressed }) => pressed && styles.pressedButton}
            onPress={startAddItemHandler}
          >
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>Add New Item</Text>
            </View>
          </Pressable>
        </View>

        {/* set items to get title container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Items to Get</Text>
        </View>

        {/* set items to get list */}
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

        <ItemInputModal
          onAddItem={addItemHandler}
          onCancel={endAddItemHandler}
          visible={modalIsVisible}
        />
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
    justifyContent: "center",
    backgroundColor: "white",
    margin: 5,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 40,
    color: "#5E08CC",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  addButton: {
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5E08CC",
  },
  pressedButton: {
    opacity: 0.5,
  },
  subtitleContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    margin: 5,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 30,
    color: "#5E08CC",
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
