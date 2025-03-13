import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import { useState, useCallback, useEffect } from "react";
import StartGameScreen from "../screens/StartScreen";
import GameScreen from "../screens/GameScreen";
import GameOverScreen from "../screens/GameOverScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import * as SplashScreen from "expo-splash-screen";

export default function Index() {
  // Set up custom fonts
  const [fontsLoaded, fontError] = useFonts({
    poker: require("../assets/fonts/Poker.ttf"),
    "poker kings": require("../assets/fonts/Poker Kings.ttf"),
  });

  // Set state variable to determine which screen to be on
  const [currentScreen, setCurrentScreen] = useState("start");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  function newGameHandler() {
    setCurrentScreen("game");
  }
  function gameOverHandler() {
    setCurrentScreen("gameOver");
  }

  function restartHandler() {
    setCurrentScreen("start");
  }

  function setUserScoreHandler(score) {
    setUserScore(score);
  }

  function setComputerScoreHandler(score) {
    setComputerScore(score);
  }

  let screen = <StartGameScreen onNext={newGameHandler} />;

  if (currentScreen === "game") {
    screen = (
      <GameScreen
        onNext={gameOverHandler}
        onSetUserScore={setUserScoreHandler}
        onSetComputerScore={setComputerScoreHandler}
      />
    );
  }

  if (currentScreen === "gameOver") {
    screen = (
      <GameOverScreen
        onNext={restartHandler}
        user={userScore}
        computer={computerScore}
      />
    );
  }

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
});
