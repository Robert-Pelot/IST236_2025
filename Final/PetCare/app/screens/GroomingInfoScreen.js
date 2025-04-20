import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  StyleSheet,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Notifications from "expo-notifications";
import { usePet } from "../components/PetContext";

const GroomingInfoScreen = () => {
  const { selectedPet, updatePet } = usePet();
  const [grooming, setGrooming] = useState(selectedPet?.grooming || "");
  const [groomerInfo, setGroomerInfo] = useState(selectedPet?.groomerInfo || "");
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [scheduledDate, setScheduledDate] = useState(null);

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission for notifications was denied.");
      }
    };
    requestPermissions();
  }, []);

  const handleSave = () => {
    try {
      const updatedPet = {
        ...selectedPet,
        grooming,
        groomerInfo,
      };
      updatePet(updatedPet);
      Alert.alert("Success", "Grooming info updated!");
    } catch (error) {
      console.error("Error updating grooming info:", error);
      Alert.alert("Error", "Something went wrong.");
    }
  };

  const showPicker = () => setPickerVisible(true);
  const hidePicker = () => setPickerVisible(false);

  const handleConfirm = (date) => {
    setScheduledDate(date);
    hidePicker();
  };

  const confirmScheduledAppointment = async () => {
    const newAppointment = {
      title: "Grooming Appointment",
      date: scheduledDate.toISOString(),
    };

    const updatedPet = {
      ...selectedPet,
      groomingAppointments: [
        ...(selectedPet.groomingAppointments || []),
        newAppointment,
      ],
    };

    updatePet(updatedPet);

    // Schedule reminder
    const triggerTime = new Date(scheduledDate).getTime() - 30 * 60 * 1000; // 30 min before
    if (triggerTime > Date.now()) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Grooming Reminder",
          body: `You have a grooming appointment for ${selectedPet.name}.`,
        },
        trigger: { seconds: (triggerTime - Date.now()) / 1000 },
      });
    }

    setScheduledDate(null);
  };

  // Sort and split appointments
  const now = new Date();
  const sortedAppointments =
    selectedPet.groomingAppointments?.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    ) || [];

  const upcoming = sortedAppointments.filter((a) => new Date(a.date) >= now);
  const past = sortedAppointments.filter((a) => new Date(a.date) < now);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Grooming Information</Text>

      <Text style={styles.label}>Grooming Instructions</Text>
      <TextInput
        style={styles.input}
        value={grooming}
        onChangeText={setGrooming}
        multiline
        placeholder="Bathing instructions, brushing, trimming..."
      />

      <Text style={styles.label}>Groomer Info</Text>
      <TextInput
        style={styles.input}
        value={groomerInfo}
        onChangeText={setGroomerInfo}
        multiline
        placeholder="Name, address, phone number, notes..."
      />

      <View style={styles.buttonContainer}>
        <Button title="💾 Save Info" onPress={handleSave} color="#4CAF50" />
      </View>

      <View style={{ marginVertical: 24 }}>
        <Text style={styles.label}>Schedule Grooming Appointment</Text>
        <Button title="📅 Pick Date & Time" onPress={showPicker} />

        <DateTimePickerModal
          isVisible={isPickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hidePicker}
          is24Hour={false}
        />

        {scheduledDate && (
          <View style={{ marginTop: 10 }}>
            <Text>
              Selected: {scheduledDate.toLocaleDateString()} at{" "}
              {scheduledDate.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
            <Button
              title="✅ Confirm Appointment"
              onPress={confirmScheduledAppointment}
            />
          </View>
        )}
      </View>

      <View style={{ marginBottom: 32 }}>
        <Text style={styles.label}>Upcoming Appointments</Text>
        {upcoming.length > 0 ? (
          upcoming.map((appt, i) => (
            <Text key={i} style={styles.upcoming}>
              {new Date(appt.date).toLocaleDateString()} at{" "}
              {new Date(appt.date).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          ))
        ) : (
          <Text style={styles.none}>No upcoming appointments.</Text>
        )}

        <Text style={[styles.label, { marginTop: 20 }]}>Past Appointments</Text>
        {past.length > 0 ? (
          past.map((appt, i) => (
            <Text key={i} style={styles.past}>
              {new Date(appt.date).toLocaleDateString()} at{" "}
              {new Date(appt.date).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          ))
        ) : (
          <Text style={styles.none}>No past appointments.</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default GroomingInfoScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#333",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
    color: "#444",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    minHeight: 80,
    textAlignVertical: "top",
  },
  buttonContainer: {
    marginTop: 16,
  },
  upcoming: {
    fontSize: 16,
    color: "#333",
    marginTop: 4,
  },
  past: {
    fontSize: 15,
    color: "#888",
    marginTop: 2,
  },
  none: {
    fontStyle: "italic",
    color: "#999",
    marginTop: 4,
  },
});