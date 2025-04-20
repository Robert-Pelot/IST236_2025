import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  Modal,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import { usePet } from "../components/PetContext";

const CareLogScreen = () => {
  const { selectedPet, updatePet } = usePet();
  const [isModalVisible, setModalVisible] = useState(false);
  const [customLogText, setCustomLogText] = useState("");

  if (!selectedPet) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading pet data...</Text>
      </View>
    );
  }

  const addLog = (type) => {
    const newLog = {
      type,
      timestamp: new Date().toISOString(),
    };

    const updatedPet = {
      ...selectedPet,
      logs: [...(selectedPet.logs || []), newLog],
    };
    updatePet(updatedPet);
  };

  const saveCustomLog = () => {
    if (!customLogText.trim()) return;

    const newLog = {
      type: customLogText.trim(),
      timestamp: new Date().toISOString(),
    };

    const updatedPet = {
      ...selectedPet,
      logs: [...(selectedPet.logs || []), newLog],
    };

    updatePet(updatedPet);
    setCustomLogText("");
    setModalVisible(false);
  };

  // Group logs by date
  const groupedLogs = (selectedPet.logs || [])
  .filter((log) => typeof log === "object" && log.timestamp) // filter only valid objects
  .map((log) => ({
    ...log,
    dateObj: new Date(log.timestamp),
  }))
  .filter((log) => !isNaN(log.dateObj)) // filter out invalid dates
  .sort((a, b) => b.dateObj - a.dateObj)
  .reduce((acc, log) => {
    const dateKey = log.dateObj.toLocaleDateString();
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(log);
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Care Log for ${selectedPet.name}`}</Text>

      <Text style={styles.sectionTitle}>Recent Entries:</Text>
      <ScrollView style={styles.logContainer}>
        {Object.entries(groupedLogs).map(([date, logs]) => (
          <View key={date} style={styles.logGroup}>
            <Text style={styles.dateHeader}>{date}</Text>
            {logs.map((log, index) => (
              <Text key={index} style={styles.logEntry}>
                {log.dateObj.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                - {log.type}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonGroup}>
        <Button title="🚶 Log Walk (instant)" onPress={() => addLog("Walk")} />
        <Button title="🍽️ Log Feeding (instant)" onPress={() => addLog("Feeding")} />
        <Button title="📝 Add Custom Log" onPress={() => setModalVisible(true)} />
      </View>

      {/* Modal for custom log entry */}
      <Modal
        transparent
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Custom Care Log Entry</Text>
            <TextInput
              value={customLogText}
              onChangeText={setCustomLogText}
              placeholder="e.g. Vet visit, bath, playtime..."
              style={styles.modalInput}
            />
            <Button title="✅ Save Log" onPress={saveCustomLog} />
            <Pressable onPress={() => setModalVisible(false)} style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CareLogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  loadingText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
    color: "#666",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  logContainer: {
    maxHeight: 350,
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  logGroup: {
    marginBottom: 16,
  },
  dateHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
  },
  logEntry: {
    fontSize: 15,
    paddingLeft: 12,
    paddingVertical: 4,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  buttonGroup: {
    gap: 12,
    marginTop: 10,
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000088",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "85%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 8,
  },
  cancelText: {
    textAlign: "center",
    color: "red",
    fontSize: 16,
  },
});