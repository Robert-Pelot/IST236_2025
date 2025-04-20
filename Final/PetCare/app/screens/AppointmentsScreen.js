import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Notifications from "expo-notifications";
import { usePet } from "../components/PetContext";

const AppointmentsScreen = () => {
  const { selectedPet, updatePet } = usePet();
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

  if (!selectedPet) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading pet info...</Text>
      </View>
    );
  }

  const showPicker = () => setPickerVisible(true);
  const hidePicker = () => setPickerVisible(false);

  const handleConfirm = (date) => {
    setScheduledDate(date);
    hidePicker();
  };

  const addInstantAppointment = () => {
    const now = new Date();
    const newAppointment = {
      title: `Vet Visit`,
      date: now.toISOString(),
    };
    const updatedPet = {
      ...selectedPet,
      appointments: [...(selectedPet.appointments || []), newAppointment],
    };
    updatePet(updatedPet);
  };

  const confirmScheduledAppointment = async () => {
    const newAppointment = {
      title: `Scheduled Vet Visit`,
      date: scheduledDate.toISOString(),
    };
    const updatedPet = {
      ...selectedPet,
      appointments: [...(selectedPet.appointments || []), newAppointment],
    };
    updatePet(updatedPet);

    const appointmentTime = new Date(scheduledDate);
    const triggerTime = appointmentTime.getTime() - 15 * 60 * 1000;

    if (triggerTime > Date.now()) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "🐾 PetCare Reminder",
          body: "You have a vet appointment coming up!",
        },
        trigger: { seconds: (triggerTime - Date.now()) / 1000 },
      });
    }

    setScheduledDate(null);
  };

  const sortedAppointments =
    selectedPet.appointments?.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    ) || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vet appointments for {selectedPet.name}</Text>

      <ScrollView style={styles.scrollView}>
        {sortedAppointments.map((appt, index) => (
          <Text key={index} style={styles.appointmentItem}>
            {appt.title}: {new Date(appt.date).toLocaleDateString()} at{" "}
            {new Date(appt.date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        ))}
      </ScrollView>

      <Button title="➕ Add Instant Appointment" onPress={addInstantAppointment} />

      <View style={styles.section}>
        <Text style={styles.subHeading}>Schedule Future Appointment:</Text>
        <Button title="📅 Pick Date & Time" onPress={showPicker} />

        <DateTimePickerModal
          isVisible={isPickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hidePicker}
          is24Hour={false}
        />

        {scheduledDate && (
          <View style={styles.confirmSection}>
            <Text style={styles.selectedTime}>
              Selected: {scheduledDate.toLocaleString()}
            </Text>
            <Button
              title="✅ Confirm Scheduled Appointment"
              onPress={confirmScheduledAppointment}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default AppointmentsScreen;

// 🎨 Styling section
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  loadingText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  scrollView: {
    maxHeight: 200,
    marginBottom: 16,
  },
  appointmentItem: {
    fontSize: 16,
    paddingVertical: 4,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  section: {
    marginTop: 24,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  selectedTime: {
    fontSize: 16,
    marginVertical: 8,
    color: "#333",
  },
  confirmSection: {
    marginTop: 12,
  },
});
