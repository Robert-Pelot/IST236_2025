import { View, Text, ScrollView, Button } from 'react-native';
import { usePet } from "../components/PetContext.tsx";

function AppointmentsScreen() {
  const { selectedPet, updatePet } = usePet();

  if (!selectedPet) {
    return (
      <View style={{ padding: 16 }}>
        <Text>Loading pet info...</Text>
      </View>
    );
  }

  const addAppointment = () => {
    const newAppointment = `Vet Visit - ${new Date().toLocaleString()}`;
    const updatedPet = {
      ...selectedPet,
      appointments: [...(selectedPet.appointments || []), newAppointment],
    };
    updatePet(updatedPet);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20 }}>{`Appointments for ${selectedPet.name}`}</Text>
      <ScrollView style={{ maxHeight: 300, marginVertical: 10 }}>
        {selectedPet.appointments?.map((appt, index) => (
          <Text key={index}>{appt}</Text>
        ))}
      </ScrollView>
      <Button title="Add Appointment" onPress={addAppointment} />
      <Button title="Toggle Notifications" onPress={() => {
        // You can implement notification toggling logic here later
        alert("Notification toggling not implemented yet");
      }} />
    </View>
  );
}

export default AppointmentsScreen;