import React, { createContext, useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import PetProfileScreen from "../screens/PetProfileScreen";
import EditPetDetailsScreen from "../screens/EditPetDetailsScreen";
import MedicalHistoryScreen from "../screens/MedicalHistoryScreen";
import DietScheduleScreen from "../screens/DietScheduleScreen";
import GroomingInfoScreen from "../screens/GroomingInfoScreen";
import CareLogScreen from "../screens/CareLogScreen";
import AppointmentsScreen from "../screens/AppointmentsScreen";
import NewPetScreen from "../screens/NewPetScreen";
import { View, Text, Image, ScrollView, Button } from "react-native";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { PetProvider } from "@/app/components/PetContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function TabLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pet Profile" component={PetProfileStack} />
      <Tab.Screen name="Care Log" component={CareLogScreen} />
      <Tab.Screen name="Appt." component={AppointmentsScreen} />
    </Tab.Navigator>
  );
}

function PetProfileStack() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={PetProfileScreen} />
      <ProfileStack.Screen
        name="Edit Details"
        component={EditPetDetailsScreen}
      />
      <ProfileStack.Screen
        name="Medical History"
        component={MedicalHistoryScreen}
      />
      <ProfileStack.Screen
        name="Diet Schedule"
        component={DietScheduleScreen}
      />
      <ProfileStack.Screen
        name="Grooming Info"
        component={GroomingInfoScreen}
      />
    </ProfileStack.Navigator>
  );
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  useEffect(() => {
    const registerForPushNotifications = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("⚠️ Please enable notifications in your device settings.");
      }
    };
    registerForPushNotifications();
  }, []);

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
