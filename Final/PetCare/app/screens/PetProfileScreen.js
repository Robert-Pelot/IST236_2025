import { View, Text, Image, ScrollView, Button } from "react-native";
import { usePet } from "../components/PetContext.tsx";
import React from "react";

const PetProfileScreen = () => {
  const { selectedPet } = usePet(); // Get the selected pet details from the context

  // If no pet is selected, show a loading message or a default screen
  if (!selectedPet) {
    return (
      <View>
        <Text>Loading pet details...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Name: {selectedPet.name}</Text>
      <Text>Age: {selectedPet.age}</Text>
      <Text>Breed: {selectedPet.breed}</Text>
      <Image
        source={{ uri: selectedPet.photo }}
        style={{ width: 150, height: 150 }}
      />
      <Text>Weight: {selectedPet.weight}</Text>
      <Text>Tasks:</Text>
      <Button title="Edit Details" onPress={() => {}} />
      <Button title="Medical History" onPress={() => {}} />
      <Button title="Diet and Feeding Schedule" onPress={() => {}} />
      <Button title="Grooming Info" onPress={() => {}} />
    </View>
  );
};

export default PetProfileScreen;
