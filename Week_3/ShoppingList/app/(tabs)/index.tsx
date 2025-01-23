import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  Pressable,
} from "react-native";

export default function HomeScreen() {
  // Create state management variables
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState("");
  const [enteredItemText, setEnteredItemText] = useState("");

  // create modal screen handler functions
  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() {
    setModalIsVisible(false);
  }

  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler() {
    console.log(enteredItemText);
    if (shoppingItems === "") {
      setShoppingItems(enteredItemText);
    } else {
      setShoppingItems(shoppingItems + "\n" + enteredItemText);
    }
    setEnteredItemText("");
    endAddItemHandler();
  }

  return (
    <>
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
          <Text style={styles.listText}>{shoppingItems}</Text>
        </View>

        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.appContainer}>
            <View style={styles.inputContainer}>
              <Image
                style={styles.image}
                source={require("../../assets/images/ShoppingCart.png")}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Item Here"
                onChangeText={itemInputHandler}
                value={enteredItemText}
              />

              <View style={styles.modalButtonContainer}>
                <View style={styles.modalButton}>
                  <Button
                    title="Add Item"
                    color="#B180F0"
                    onPress={addItemHandler}
                  />
                </View>
                <View style={styles.modalButton}>
                  <Button
                    title="Cancel"
                    color="#F1449B"
                    onPress={endAddItemHandler}
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
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
  addButtonContainer: {

  },
  addButton: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,

  },
  addButtonText: {
    fontSize: 20,
    color: "#5E08CC"
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
    backgroundColor: "#ffffff",
    width: "90%",
    alignItems: "center",
  },
  listText: {
    fontSize: 20,
    color: "black",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
    backgroundColor: "#311B6B",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#E4D0FF",
    backgroundColor: "#E4D0FF",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },
  modalButtonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 8,
  },
});
