import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  StyleSheet,
} from "react-native";
import { usePet } from "../components/PetContext";
import { useNavigation } from "@react-navigation/native";
import PetSelector from "../components/PetSelector";

const HomeScreen = () => {
  const { selectedPet } = usePet();
  const navigation = useNavigation();

  if (!selectedPet) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading pet...</Text>
        <Text style={styles.subtext}>
          If you haven't added one yet, try adding a new pet.
        </Text>
        <Button
          title="Add Another Pet"
          onPress={() => navigation.navigate("New Pet")}
        />
      </View>
    );
  }

  // Combine regular appointments and grooming appointments
  const allAppointments = [
    ...(selectedPet.appointments || []), // Regular appointments
    ...(selectedPet.groomingAppointments || []), // Grooming appointments
  ];

  // Filter and sort appointments (including grooming)
  const upcomingAppointments = allAppointments
    .map((appt) => ({
      ...appt,
      dateObj: new Date(appt.date),
    }))
    .filter((appt) => appt.dateObj > new Date()) // Only future appointments
    .sort((a, b) => a.dateObj - b.dateObj); // Sort by date

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <PetSelector />

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Currently Selected:</Text>

        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{selectedPet.name}</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{selectedPet.age}</Text>

        <Text style={styles.label}>Birthdate:</Text>
        <Text style={styles.value}>{selectedPet.birthdate}</Text>

        {selectedPet?.photo ? (
          <Image source={{ uri: selectedPet.photo }} style={styles.image} />
        ) : (
          <Text style={styles.noPhoto}>No photo available</Text>
        )}

        <Text style={[styles.label, { marginTop: 16 }]}>
          Upcoming Appointments:
        </Text>
        {upcomingAppointments.length > 0 ? (
          upcomingAppointments.map((appt, index) => (
            <Text key={index} style={styles.taskItem}>
              • {appt.title} on {appt.dateObj.toLocaleDateString()} at{" "}
              {appt.dateObj.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          ))
        ) : (
          <Text style={styles.noTask}>No upcoming appointments.</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Add Another Pet"
          onPress={() => navigation.navigate("New Pet")}
          color="#4CAF50"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtext: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    marginBottom: 4,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    alignSelf: "center",
    marginVertical: 16,
  },
  noPhoto: {
    fontStyle: "italic",
    color: "#888",
    marginTop: 10,
  },
  taskItem: {
    fontSize: 15,
    marginLeft: 8,
    marginVertical: 2,
  },
  noTask: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#777",
  },
  buttonContainer: {
    marginTop: 12,
    alignItems: "center",
  },
});
