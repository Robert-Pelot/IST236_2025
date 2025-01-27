import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Pressable,
  Modal,
  TextInput,
} from "react-native";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setQuestion("");
    setAnswer("");
  };

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>Magic 8 Ball</Text>
          </View>
        </View>
        <Text style={styles.inputLabel}>Enter Your Question:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter A Question for the 8-ball here:"
          onChangeText={setQuestion}
          value={question}
        />
        <View style={styles.rollButtonContainer}>
          <Pressable
            // add the android ripple
            android_ripple={{ color: "blue" }}
            // style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            // when pressed, open modal screen
            onPress={getRandomAnswer}
          >
            <Text style={styles.rollButtonText}>Roll Eight Ball</Text>
          </Pressable>
        </View>

        {/* Modal for displaying the answer */}
        <Modal visible={modalVisible} animationType="slide">
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {/* Question Section */}
                <View style={styles.modalHeader}>
                  <Text style={styles.modalQuestion}>Your Question:</Text>
                  <Text style={styles.modalQuestionText}>{question}</Text>
                </View>

                {/* Answer Section */}
                <View style={styles.magicBall}> 
                  <View style={styles.magicBallInner}>
                  <Text style={styles.magicBallAnswer}>{answer}</Text>
                </View>
                </View>

                {/* Return Button */}
                <Pressable style={styles.modalButton} onPress={closeModal}>
                  <Text style={styles.modalButtonText}>Return</Text>
                </Pressable>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  titleContainer: {
    marginBottom: 30,
  },
  titleBackground: {
    backgroundColor: "#4B8BF3",
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    color: "#333",
  },
  textInput: {
    width: "80%",
    height: 50,
    borderColor: "#4B8BF3",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "white",
  },
  rollButtonContainer: {
    width: "80%",
    borderRadius: 8,
    backgroundColor: "#4B8BF3",
    overflow: "hidden",
  },
  pressedButton: {
    opacity: 0.5,
  },
  rollButtonText: {
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    padding: 20,
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modalHeader: {
    width: "100%",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 20,
    alignItems: "center",
  },

  modalQuestion: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  modalQuestionText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    fontStyle: "italic",
  },
  modalBody: {
    marginTop: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modalAnswer: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C6DF0",
    textAlign: "center",
  },
  modalButton: {
    marginTop: 20, 
    width: "60%", 
    backgroundColor: "#4B8BF3", 
    paddingVertical: 12, 
    borderRadius: 8, 
    alignItems: "center", 
    justifyContent: "center", 
  },
  modalButtonText: {
    fontSize: 18, 
    fontWeight: "bold", 
    color: "white", 
    textAlign: "center", 
  },
  magicBall: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderColor: "#fff",
    borderWidth: 5,
  },
  magicBallInner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 5,
  },
  magicBallAnswer: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 10,
    fontStyle: "italic",
  },
});

