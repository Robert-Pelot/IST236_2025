import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Button,
  View,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useRouter, Link } from "expo-router";
import { Video } from "expo-av";
import Colors from "../constants/colors";

// Updated MyButton component to show video in modal
function MyButton() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      {/* Button that triggers the modal */}
      <Button title="Watch me Dance!" onPress={toggleModal} />

      {/* Modal displaying the video */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Enjoy the silly dance!</Text>
            <Video
              source={require("../assets/videos/silly-dance.mp4")} // Your local video file
              style={styles.video}
              useNativeControls
              resizeMode="contain"
              shouldPlay={true}
              isLooping={true}
            />
            {/* Close the modal */}
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const MenuOptions: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.textWithLineHeight}>
        Welcome To Joe's Diner!
      </Text>
      <Text>Enjoy my menu, You are bound to find something you like!</Text>
      <View style={styles.divider} />

      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => router.push("/appetizer")}
      >
        <Text style={styles.buttonText}>Appetizer</Text>
      </TouchableOpacity>
      <View style={styles.divider} />

      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => router.push("/entrees")}
      >
        <Text style={styles.buttonText}>Main Course</Text>
      </TouchableOpacity>
      <View style={styles.divider} />

      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => router.push("/dessert")}
      >
        <Text style={styles.buttonText}>Desserts</Text>
      </TouchableOpacity>
      <View style={styles.divider} />

      {/* Fun video button */}
      <View style={styles.container}>
        <MyButton />
      </View>
      {/* Return to Home button */}
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => router.push("/")} // Navigate to index.tsx screen
      >
        <Text style={styles.buttonText}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Main container style
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: Colors.primary500,
  },

  // Text style with custom line height
  textWithLineHeight: {
    fontSize: 24,
    lineHeight: 24, // Adjust this value to change the vertical spacing
    marginBottom: 10,
    color: Colors.accent800,
    textAlign: "center",
  },

  // Default text style
  defaultText: {
    fontSize: 16,
    marginBottom: 10,
  },

  // Divider style for separating sections
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },

  // Style for buttons
  buttonStyles: {
    backgroundColor: Colors.accent500, // Custom background color for buttons
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },

  // Text inside buttons
  buttonText: {
    color: "white", // Text color inside the button
    fontSize: 16,
  },

  // Modal container style
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
  },

  // Modal content style
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%", // Adjust width to make modal content smaller or larger
    alignItems: "center",
  },

  // Text style inside the modal
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },

  // Video style inside the modal
  video: {
    width: "100%", // Full width of the modal
    height: 300, // Set a fixed height for the video
    marginBottom: 20,
  },

  // Close button style inside the modal
  closeButton: {
    backgroundColor: "#FF6347", // Close button background color
    padding: 10,
    borderRadius: 5,
  },

  // Close button text style
  closeButtonText: {
    color: "white", // Text color for the close button
    fontSize: 16,
  },


});

export default MenuOptions;
