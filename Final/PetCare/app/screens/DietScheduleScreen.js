import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";
import { usePet } from "../components/PetContext";

const defaultDiet = {
  breakfast: { time: "", food: "", meds: "" },
  lunch: { time: "", food: "", meds: "" },
  dinner: { time: "", food: "", meds: "" },
  snacks: { food: "" },
  treats: { food: "" },
};

const DietScheduleScreen = () => {
  const { selectedPet, updatePet } = usePet();
  const [diet, setDiet] = useState(selectedPet?.diet || defaultDiet);

  const updateField = (meal, field, value) => {
    setDiet((prev) => ({
      ...prev,
      [meal]: {
        ...prev[meal],
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    try {
      const updatedPet = {
        ...selectedPet,
        diet,
      };
      updatePet(updatedPet);
      Alert.alert("Success", "Diet updated!");
    } catch (error) {
      console.error("Error updating diet:", error);
      Alert.alert("Error", "Something went wrong.");
    }
  };

  return (
    <ScrollView
     style={styles.container}
     scrollEventThrottle={16}
     decelerationRate={"normal"}
     >
      <Text style={styles.title}>Diet & Feeding Schedule</Text>

      {["breakfast", "lunch", "dinner"].map((meal) => (
        <View key={meal} style={styles.section}>
          <Text style={styles.sectionTitle}>
            {meal.charAt(0).toUpperCase() + meal.slice(1)}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Time (e.g. 8:00 AM)"
            value={diet[meal]?.time}
            onChangeText={(val) => updateField(meal, "time", val)}
          />
          <TextInput
            style={styles.input}
            placeholder="What to feed"
            value={diet[meal]?.food}
            onChangeText={(val) => updateField(meal, "food", val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Medications (if any)"
            value={diet[meal]?.meds}
            onChangeText={(val) => updateField(meal, "meds", val)}
          />
        </View>
      ))}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Snacks</Text>
        <TextInput
          style={styles.input}
          placeholder="What snacks are allowed"
          value={diet.snacks?.food}
          onChangeText={(val) => updateField("snacks", "food", val)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Treats</Text>
        <TextInput
          style={styles.input}
          placeholder="What treats are allowed"
          value={diet.treats?.food}
          onChangeText={(val) => updateField("treats", "food", val)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Save Diet Info" onPress={handleSave} color="#4CAF50" />
      </View>
    </ScrollView>
  );
};

export default DietScheduleScreen;

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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#444",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
});