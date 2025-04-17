import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { usePet } from '../components/PetContext';

const NewPetScreen = ({ navigation }) => {
  const { addPet } = usePet();
  const [form, setForm] = useState({
    name: '',
    age: '',
    breed: '',
    birthdate: '',
    weight: '',
    photo: '',
  });

  const storage = getStorage();

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    if (!form.name) {
      alert('Please enter a pet name');
      return;
    }

    addPet(form);
    navigation.goBack();
  };

  const uploadImage = async (source) => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Camera access is needed to upload a photo.');
      return;
    }

    let result;
    if (source === 'camera') {
      result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 0.7,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 0.7,
      });
    }

    if (!result.canceled && result.assets?.length) {
      const image = result.assets[0];
      const response = await fetch(image.uri);
      const blob = await response.blob();

      const filename = `pets/${Date.now()}.jpg`;
      const storageRef = ref(storage, filename);

      try {
        await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(storageRef);
        setForm({ ...form, photo: downloadURL });
        Alert.alert('Success', 'Image uploaded!');
      } catch (error) {
        console.error('Upload error:', error);
        Alert.alert('Error', 'Failed to upload image');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add New Pet</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={form.name}
        onChangeText={(text) => handleChange('name', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        value={form.age}
        onChangeText={(text) => handleChange('age', text)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Breed"
        value={form.breed}
        onChangeText={(text) => handleChange('breed', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Birthdate (YYYY-MM-DD)"
        value={form.birthdate}
        onChangeText={(text) => handleChange('birthdate', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Weight"
        value={form.weight}
        onChangeText={(text) => handleChange('weight', text)}
        keyboardType="numeric"
      />

      {form.photo ? (
        <Image
          source={{ uri: form.photo }}
          style={{ width: 150, height: 150, alignSelf: 'center', marginBottom: 10 }}
        />
      ) : (
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>No photo uploaded</Text>
      )}

      <Button title="Take Photo" onPress={() => uploadImage('camera')} />
      <Button title="Upload from Gallery" onPress={() => uploadImage('gallery')} />

      <View style={{ height: 20 }} />
      <Button title="Save Pet" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default NewPetScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
});