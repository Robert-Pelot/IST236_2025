import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

const API_URL = "https://jsonplaceholder.typicode.com/users"; // Example API
const UserForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // Function to handle form submission (POST request)
  const handleSubmit = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });
      const result = await response.json();
      Alert.alert("Success", `User created with ID: ${result.id}`);
    } catch (error) {
      Alert.alert("Error", "Failed to submit data");
    }
  };
  // Function to fetch existing user data (GET request)
  const fetchUserData = async () => {
    try {
      const response = await fetch(`${API_URL}/1`); // Fetching user with ID 1
      const data = await response.json();
      setName(data.name);
      setEmail(data.email);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch data");
    }
  };
  // Load user data when component mounts
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <View style={{ padding: 20 }}>
      <Text>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Load User Data" onPress={fetchUserData} color="green" />
    </View>
  );
};

 

export default UserForm;