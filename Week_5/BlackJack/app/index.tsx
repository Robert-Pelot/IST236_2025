import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from 'expo-font';
import { useState } from 'react';
import StartGameScreen from '../screens/StartScreen';
import GameScreen from '../screens/GameScreen';
import GameOverScreen from '../screens/GameOverScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from '@/constants/colors';

export default function Index() {
  // Set up custom fonts
  const [fontsLoaded] = useFonts({
    'poker': require("../assets/fonts/Poker.ttf"),
    'poker kings': require("../assets/fonts/Poker Kings.ttf")
  })
  
  // Set state variable to determine which screen to be on
  const[currentScreen, setCurrentScreen] = useState("start");

  function newGameHandler() {
    setCurrentScreen("game");
  }
  function gameOverHandler() {
    setCurrentScreen("gameOver");
  }

  function restartHandler() {
    setCurrentScreen("start")
  }

  let screen = <StartGameScreen onNext={newGameHandler} />;

  if (currentScreen === "game"){
    screen = <GameScreen onNext={gameOverHandler}/>;
  }

  if (currentScreen === "gameOver"){
    screen = <GameOverScreen onNext={restartHandler}/>;
  }

  return (
    <>
    <StatusBar style='auto' />
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
})
