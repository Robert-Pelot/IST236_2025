import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { usePet } from '../components/PetContext';

const PetSelector = () => {
  const { pets, selectedPetId, setSelectedPetId } = usePet();

  if (!pets || Object.keys(pets).length === 0) return <Text>No pets yet</Text>;

  return (
    <View>
      <Text>Select a Pet:</Text>
      <Picker
        selectedValue={selectedPetId}
        onValueChange={(itemValue) => setSelectedPetId(itemValue)}
      >
        {Object.entries(pets).map(([id, pet]) => (
          <Picker.Item key={id} label={pet.name || 'Unnamed'} value={id} />
        ))}
      </Picker>
    </View>
  );
};

export default PetSelector;