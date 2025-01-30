import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import React, { useState } from "react";
import Colors from './constants/colors';
import { useFonts } from 'expo-font';



export default function App() {
  // setup our custom fonts
  const [fontsloaded] = useFonts({
    "squealer": require("./assets/fonts/Squealer.otf"),
    "squealer-embossed": require("./assets/fonts/SquealerEmbossed.otf")
  })
    

  // Set the state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  function eventScreenHandler() {
    setCurrentScreen("events");
  }

  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  // Determine which screen to be on 
  let screen = <HomeScreen onNext={eventScreenHandler}/>;

  if (currentScreen === "events") {
    screen = <EventsScreen onNext={homeScreenHandler} />;
  }

  return (
    <>
      <StatusBar style='light' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
