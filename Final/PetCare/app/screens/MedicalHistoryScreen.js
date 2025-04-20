import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  FlatList,
  StyleSheet,
} from "react-native";
import { usePet } from "../components/PetContext";

const MedicalHistoryScreen = () => {
  const { selectedPet, updatePet } = usePet();
  const [medicalRecords, setMedicalRecords] = useState(selectedPet?.medicalHistory || []);
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    setMedicalRecords(selectedPet?.medicalHistory || []);
  }, [selectedPet]);

  // Helper function to validate and parse the date
  const isValidDate = (dateString) => {
    // Use regex to check if the date is in YYYY-MM-DD format
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  };

  const handleSave = () => {
    // Validate inputs
    if (!date || !details) {
      Alert.alert("Error", "Please enter both a date and details for the record.");
      return;
    }

    // Check if the date is valid
    if (!isValidDate(date)) {
      Alert.alert("Error", "Please enter a valid date in YYYY-MM-DD format.");
      return;
    }

    // Convert the date to a Date object and check validity
    const recordDate = new Date(date);

    if (isNaN(recordDate.getTime())) {
      Alert.alert("Error", "Invalid date format.");
      return;
    }

    // Create a new record with a valid date (stored as an ISO string)
    const newRecord = {
      date: recordDate.toISOString(), // Convert to ISO string
      details,
    };

    // Add the new record to the existing medical records
    const updatedRecords = [...medicalRecords, newRecord];

    // Update the medical history for the selected pet
    const updatedPet = {
      ...selectedPet,
      medicalHistory: updatedRecords,
    };

    // Update the pet context
    updatePet(updatedPet);

    // Update the local state and clear inputs
    setMedicalRecords(updatedRecords);
    setDate("");
    setDetails("");

    // Success message
    Alert.alert("Success", "Medical record added!");
  };

  const renderItem = ({ item }) => {
    const recordDate = new Date(item.date);
    
    if (isNaN(recordDate.getTime())) {
      return <Text style={styles.recordDetails}>Invalid Date</Text>; // Fallback in case of invalid date
    }

    return (
      <View style={styles.recordContainer}>
        <Text style={styles.recordDate}>
          {recordDate.toLocaleDateString()} at {recordDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
        <Text style={styles.recordDetails}>{item.details}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medical History</Text>

      <Text style={styles.label}>Record Date</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Enter date (YYYY-MM-DD)"
      />

      <Text style={styles.label}>Details</Text>
      <TextInput
        style={styles.input}
        value={details}
        onChangeText={setDetails}
        multiline
        placeholder="Enter details"
      />

      <View style={styles.buttonContainer}>
        <Button title="Save Record" onPress={handleSave} color="#4CAF50" />
      </View>

      <Text style={styles.subtitle}>Medical History Records</Text>

      <FlatList
        data={medicalRecords}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
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
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  recordContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  recordDate: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  recordDetails: {
    fontSize: 14,
    color: "#555",
  },
});

export default MedicalHistoryScreen;