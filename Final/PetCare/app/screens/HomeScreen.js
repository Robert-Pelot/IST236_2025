import React from "react";
import { View, Text, Image, ScrollView, Button } from "react-native";
import { usePet } from "../components/PetContext";
import { useNavigation } from "@react-navigation/native";
import PetSelector from "../components/PetSelector";

const HomeScreen = () => {
  const { selectedPet } = usePet();
  const navigation = useNavigation();

  if (!selectedPet) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Loading pet...</Text>;
        <Text>If you haven't added one yet, try adding a new pet.</Text>
        <Button title="Add Another Pet" onPress={() => navigation.navigate('New Pet')} />
      </View>
    );
  }

  return (
    <ScrollView>
      <PetSelector />
      
      <Text>{`Name: ${selectedPet.name}`}</Text>
      <Text>{`Age: ${selectedPet.age}`}</Text>
      <Text>{`Birthdate: ${selectedPet.birthdate}`}</Text>
      {selectedPet.photo ? (
        <Image
          source={{ uri: selectedPet.photo }}
          style={{ width: 150, height: 150 }}
        />
      ) : (
        <Text>No photo available</Text>
      )}
      <Text>Upcoming Tasks:</Text>
      {selectedPet.tasks?.map((task, index) => (
        <Text key={index}>{task}</Text>
      ))}
      <Button title="Add Another Pet" onPress={() => navigation.navigate('New Pet')} />
    </ScrollView>
  );
};

export default HomeScreen;
