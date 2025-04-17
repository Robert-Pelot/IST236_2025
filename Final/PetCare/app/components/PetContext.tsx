import React, { createContext, useState, useContext, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set, push } from 'firebase/database';
import { firebaseConfig } from '../config/firebaseConfig';


const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

// Context
const PetContext = createContext();

// Default pet structure
const defaultPet = {
  name: '',
  age: '',
  birthdate: '',
  photo: '',
  breed: '',
  weight: '',
  tasks: [],
  logs: [],
  appointments: []
};

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState({});
  const [selectedPetId, setSelectedPetId] = useState(null);

  // Load all pets from Firebase
  useEffect(() => {
    const petsRef = ref(database, 'pets');
    onValue(petsRef, (snapshot) => {
      const data = snapshot.val();
      console.log('🐾 All pets from Firebase:', data);

      if (data) {
        setPets(data);
        // If no pet is selected yet, auto-select the first
        const firstPetId = Object.keys(data)[0];
        setSelectedPetId((prev) => prev || firstPetId);
      } else {
        setPets({});
      }
    });
  }, []);

  // Add new pet
  const addPet = (newPet) => {
    const petsRef = ref(database, 'pets');
    const newPetRef = push(petsRef); // Firebase generates a unique ID

    const petWithDefaults = {
      ...defaultPet,
      ...newPet,
    };

    set(newPetRef, petWithDefaults);
    setSelectedPetId(newPetRef.key);
  };

  // Update selected pet
  const updatePet = (updatedPet) => {
    if (!selectedPetId) return;
    const petRef = ref(database, `pets/${selectedPetId}`);
    set(petRef, updatedPet);
  };

  const selectedPet = selectedPetId ? pets[selectedPetId] : null;

  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPet,
        selectedPetId,
        setSelectedPetId,
        addPet,
        updatePet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export const usePet = () => useContext(PetContext);
export default PetProvider;