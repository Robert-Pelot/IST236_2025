import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Modal,
  Image,
  TextInput,
} from "react-native";
import { useState } from "react";

function ItemInputModal(props) {
  const [enteredItemText, setEnteredItemText] = useState("");

  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler(){
    props.onAddItem(enteredItemText);
    setEnteredItemText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/ShoppingCart.png")}
          ></Image>

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
                onPress={props.onCancel}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}  
export default ItemInputModal;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1E085A",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311B6B",
    width: "90%",
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