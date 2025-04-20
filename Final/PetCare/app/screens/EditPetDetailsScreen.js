import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { usePet } from "../components/PetContext";

const EditPetDetailsScreen = () => {
  const { selectedPet, updatePet } = usePet();
  const [name, setName] = useState(selectedPet?.name || "");
  const [age, setAge] = useState(selectedPet?.age || "");
  const [breed, setBreed] = useState(selectedPet?.breed || "");
  const [weight, setWeight] = useState(selectedPet?.weight || "");
  const [photo, setPhoto] = useState(selectedPet?.photo || "");

  // Function to request permissions for media library and camera
  const requestPermissions = async () => {
    const { status: mediaStatus } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    const { status: cameraStatus } =
      await ImagePicker.requestCameraPermissionsAsync();

    if (mediaStatus !== "granted" || cameraStatus !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need permission to access your media and camera."
      );
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Need access to media library.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // ✅ Correct
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setPhoto(uri);
    }
  };

  const takePhoto = async () => {
    // Check for permissions before launching camera
    const hasPermissions = await requestPermissions();
    if (!hasPermissions) return;

    // Launch camera to take a new picture if permissions are granted
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setPhoto(uri);
    }
  };

  const handleSave = () => {
    try {
      const updatedPet = {
        ...selectedPet,
        name,
        age,
        breed,
        weight,
        photo,
      };
      updatePet(updatedPet); // Update the pet details
      Alert.alert("Success", "Pet details updated!");
    } catch (error) {
      Alert.alert("Error", "Something went wrong.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Edit Pet Details</Text>

        <TouchableOpacity onPress={pickImage}>
          {photo?.startsWith("http") || photo?.startsWith("file://") ? (
            <Image source={{ uri: photo }} style={styles.image} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Text style={{ color: "#999" }}>Tap to select photo</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={takePhoto} style={styles.cameraButton}>
          <Text style={styles.cameraButtonText}>Take a New Picture</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />

        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Age"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Breed</Text>
        <TextInput
          style={styles.input}
          value={breed}
          onChangeText={setBreed}
          placeholder="Breed"
        />

        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          placeholder="Weight"
          keyboardType="numeric"
        />

        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={handleSave} color="#4CAF50" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#333",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 16,
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 16,
  },
  cameraButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 6,
    marginBottom: 16,
    alignSelf: "center",
  },
  cameraButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 24,
  },
});

export default EditPetDetailsScreen;
