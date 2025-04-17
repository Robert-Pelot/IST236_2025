import React, { createContext, useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import PetProfileScreen from "../screens/PetProfileScreen";
import CareLogScreen from "../screens/CareLogScreen";
import AppointmentsScreen from "../screens/AppointmentsScreen";
import NewPetScreen from "../screens/NewPetScreen";
import { View, Text, Image, ScrollView, Button } from "react-native";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { PetProvider } from "@/app/components/PetContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pet Profile" component={PetProfileScreen} />
      <Tab.Screen name="Care Log" component={CareLogScreen} />
      <Tab.Screen name="Appt." component={AppointmentsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PetProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={TabLayout}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="New Pet" component={NewPetScreen} />
      </Stack.Navigator>
    </PetProvider>
  );
}
