import { View, Text, Image, ScrollView, Button } from "react-native";
import { usePet } from "../components/PetContext.tsx";

function CareLogScreen() {
  const { selectedPet, selectedPetId, updatePet } = usePet();

  if (!selectedPet) {
    return (
      <View>
        <Text>Loading pet data...</Text>
      </View>
    );
  }

  const addLog = (type) => {
    const newLog = `${type} - ${new Date().toLocaleString()}`;
    const updatedPet = {
      ...selectePet,
      logs: [...(selectedPet.logs || []), newLog],
    };
    updatePet(updatedPet);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>{`Name: ${selectedPet.name}`}</Text>
      <ScrollView style={{ maxHeight: 300, marginBottom: 20 }}>
        {selectedPet.logs?.map((log, index) => (
          <Text key={index}>{log}</Text>
        ))}
      </ScrollView>
      <Button title="Log Walk" onPress={() => addLog("Walk")} />
      <Button title="Log Feeding" onPress={() => addLog("Feeding")} />
      <Button title="Add New Log" onPress={() => {}} />
    </View>
  );
}

export default CareLogScreen;
