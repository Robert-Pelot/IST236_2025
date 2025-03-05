import React, { useState } from 'react';
import { View, TextInput, Button, Alert, FlatList, Text, StyleSheet, ScrollView } from 'react-native';

type Employee = {
  id: number;
  name: string;
  position: string;
};

const EmployeeForm = () => {
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const addEmployee = () => {
    const empId = parseInt(id, 10);
    if (!empId || !name || !position) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    const newEmployee = { id: empId, name, position };
    setEmployeeList([...employeeList, newEmployee]);
    setId('');
    setName('');
    setPosition('');
  };

  const deleteEmployee = () => {
    const empId = parseInt(id, 10);
    if (!empId) {
      Alert.alert('Error', 'Please enter a valid ID');
      return;
    }
    setEmployeeList(employeeList.filter(emp => emp.id !== empId));
    setId('');
  };

  return (
    <View style={{ flexDirection: 'row', height: '100%' }}>

	<View style={styles.divider} />

      {/* Left Navigation Bar */}
      <View style={{ width: 150, backgroundColor: '#f0f0f0', padding: 10 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Employees</Text>
        <ScrollView>
          {employeeList.map((emp) => (
            <Text key={emp.id} style={{ marginBottom: 5 }}>{emp.name}</Text>
          ))}
        </ScrollView>
      </View>
      
      {/* Main Content */}
      <View style={{ flex: 1, padding: 20 }}>
        <TextInput
          placeholder="ID"
          keyboardType="numeric"
          value={id}
          onChangeText={setId}
          style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        />
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        />
        <TextInput
          placeholder="Position"
          value={position}
          onChangeText={setPosition}
          style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        />
        <Button title="Add Employee" onPress={addEmployee} />
        <Button title="Delete Employee" onPress={deleteEmployee} color="red" />

        <FlatList
          data={employeeList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text>{`${item.id} - ${item.name} - ${item.position}`}</Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  textWithLineHeight: {
    fontSize: 16,
    lineHeight: 24, // Adjust this value to change the vertical spacing
    marginBottom: 10,
  },
  defaultText: {
    fontSize: 16,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});

export default EmployeeForm;