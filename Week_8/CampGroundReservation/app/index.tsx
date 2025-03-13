import { StatusBar } from "expo-status-bar";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "../screens/HomeScreen";

const { width, height } = Dimensions.get("window");

export default function Index() {
  const [fontsLoaded, fontError] = useFonts({
    logs: require("../assets/fonts/Sketchlogs.ttf"),
    drift: require("../assets/fonts/Driftwood.ttf")
  });

  const [isSplashScreenVisible, setSplashScreenVisible] = useState(true);

  useEffect(() => {
    // Prevent the splash screen from auto-hiding
    SplashScreen.preventAutoHideAsync();
    console.log('Splash Screen prevented from auto-hiding');

    // Set a fixed delay for the splash screen (e.g., 10 seconds)
    const timer = setTimeout(() => {
      console.log('Hiding splash screen after timeout');
      setSplashScreenVisible(false); // Update state to hide splash screen after the delay
      SplashScreen.hideAsync(); // Explicitly hide the splash screen after the timeout
    }, 10000); // Delay in milliseconds (10 seconds)

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, []);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      console.log("Fonts loaded, hiding splash screen.");
      // Make sure to hide the splash screen once fonts are loaded, even with the timeout
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Ensure splash screen is displayed while fonts are still loading
  if (!fontsLoaded && !fontError && isSplashScreenVisible) {
    console.log('Displaying splash screen while fonts are loading');
    return (
      <View style={styles.loadingContainer}>
        <Image
          source={require("../assets/images/lake-and-dock.jpg")}
          style={[styles.loadingImage, { width: width }, { height: height }]}
        />
      </View>
    );
  }

  // Once fonts are loaded or splash screen delay is over, render the main screen
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>
        <HomeScreen />
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Adjust background color
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Background color for splash screen
  },
  loadingImage: {
    resizeMode: "cover", // Ensures the image is resized to cover the screen
  },
});