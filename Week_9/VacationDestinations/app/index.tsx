import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CampgroundOverviewScreen from "../screens/CampgroundsOverviewScreen";
import Colors from "../constants/colors";

const Stack = createNativeStackNavigator();

export default function Index() {
  const [fontsLoaded, fontError] = useFonts({
    roboto: require("../assets/fonts/RobotoSlab.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    // Prevent splash screen from auto hiding
    SplashScreen.preventAutoHideAsync();

    // Force the splash screen to stay for 3 seconds
    const timer = setTimeout(() => {
      SplashScreen.hideAsync(); // Hide splash screen after the delay
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // Clean up timer when component unmounts
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.primary300,
            headerTitleStyle: { fontFamily: "roboto", fontSize: 40 },
            contentStyle: { backgroundColor: Colors.primary800 },
          }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Countries",
            }}
          />
          <Stack.Screen
            name="CampgroundOverviewScreen"
            component={CampgroundOverviewScreen}
          />
        </Stack.Navigator>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
