import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from 'react';

export default function App() {
  // Set a max and min dice value
  const maxVal = 6;
  const minVal = 1;
  // Create state management variables
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [userWager, setUserWager] = useState("");
  const [diceSum, setDiceSum] = useState(0);

  function startDiceRollHandler() {
    setModalIsVisible(true);
    setUserGuess("");
    setUserWager("");
  }

  function endDiceRollHandler() {
    setModalIsVisible(false);
  }

  function onDiceRoll() {
    const rndNum1 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    const rndNum2 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    setDice1(rndNum1);
    setDice2(rndNum2);
    let result = rndNum1 + rndNum2;
    setDiceSum(result);
    endDiceRollHandler();
  }

  // Dynamically determine what type of result text to display
  let resultText = (
    <Text style={styles.resultText}>Roll the dice and make a Wager</Text>
  )

  const userGuessNum = parseInt(userGuess);
  const userWagerNum = parseInt(userWager);
  const diceSumNum = parseInt(diceSum);
  if (userGuess !== "" && userGuessNum === diceSumNum) {
    resultText = <Text style={styles.resultText}>You Won ${(userWagerNum * 5).toFixed(2)}</Text>
  }
  if (userGuess !== "" && userGuessNum !== diceSumNum) {
    resultText = <Text style={styles.resultText}>You Lost ${(userWagerNum).toFixed(2)}</Text>
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground} >
            <Text style={styles.title}>Dice Roller</Text>
          </View>          
        </View>
        <View style={styles.rollButtonContainer}>
          <Pressable
            // add the android ripple
            android_ripple={{ color: "#FE62D2" }}
            // style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            // when pressed, open modal screen
            onPress={startDiceRollHandler}
          >
            <Text style={styles.rollButtonText}>Roll Dice</Text>
          </Pressable>
          {/* <Button title="Roll Dice" style={styles.rollButton}/> */}
        </View>
        <View style={styles.diceContainer}>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>{dice1}</Text>
          </View>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>{dice2}</Text>
          </View>
        </View>
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>The resulting dice roll is {diceSum}</Text>
        </View>
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>{resultText}</Text>
        </View>

        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.inputLabel}>Guess The Roll Value:</Text>
            <TextInput
              style={styles.textInput}
              // placeholder for when it's empty
              placeholder="Enter A Guess Between 2 and 12"
              // set the keyboard type to number pad for only integers
              keyboardType="number-pad"
              // when the text is changed, update the userguess
              onChangeText={setUserGuess}
              // Tie the entered value to the userGuess so when
              // it is reset to blank the input field will also reset              
              value={userGuess}
            />
            <Text style={styles.inputLabel}>What's Your Wager?</Text>            
            <TextInput
              style={styles.textInput}
              // placeholder for when it's empty
              placeholder="Enter Your Wager Here"
              // set the keyboard type to number pad for only integers
              keyboardType="number-pad"
              // when the text is changed, update the userguess
              onChangeText={setUserWager}
              // Tie the entered value to the userGuess so when
              // it is reset to blank the input field will also reset              
              value={userWager}
            />
            <View style={styles.modalButtonContainer}>
              <View style={styles.modalButton}>
                <Button title="Roll Dice" onPress={onDiceRoll}/>
              </View>
              <View style={styles.modalButton}>
                <Button title="Cancel" color="black" onPress={endDiceRollHandler}/>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8849B3",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    paddingTop: 20,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleBackground: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 25,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
  },
  rollButtonContainer: {
    flex: 1,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: 'center',
  },
  pressedButton: {
    opacity: 0.5,
  },
  rollButton: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7,
  },
  rollButtonText: {
    fontSize: 25,
    backgroundColor: "white",
    borderRadius: 5,
  },
  diceContainer: {
    flex: 2,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  dice: {
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 7,
    margin: 20,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  diceNumber: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  resultsContainer: {
    flex: 1,
  },
  resultsText: {
    fontSize: 20,
  },
  modalRoot: {
    flex: 1,
    backgroundColor: "#8849B3",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    paddingTop: 20,
  },
  inputLabel: {
    fontSize: 25,
    color: "white",
    marginTop: 20,

  },
  textInput: {
    backgroundColor: "#FFD4D4",
    borderWidth: 2,
    borderRadius: 6,
    padding: 12,
    color: "#8849B3",
    marginBottom: 30,
  },
  modalButtonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 8
  },

});
