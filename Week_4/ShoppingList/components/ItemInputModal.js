import React, { useState } from 'react';
import { Modal, SafeAreaView, View, TextInput, Button, Image, StyleSheet } from 'react-native';

const ItemInputModal = (props: {
  onAddItem: (enteredItemText: string) => void;
  onCancel: () => void;
  visible: boolean;
}) => {
  const [enteredItemText, setEnteredItemText] = useState('');

  // Handle item input change
  const itemInputHandler = (text: string) => {
    setEnteredItemText(text);
  };

  // Handle Add Item press
  const addItemHandler = () => {
    console.log('Item Added:', enteredItemText);
    props.onAddItem(enteredItemText);
    setEnteredItemText(""); // Clear input after adding item
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/ShoppingCart.png")}
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
                onPress={props.onCancel}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    width: '45%',
  },
});

export default ItemInputModal;