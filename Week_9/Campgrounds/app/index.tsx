import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
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
    mountain: require("../assets/fonts/Mountain.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <Stack.Navigator 
          initialRouteName="HomeScreen"
          screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: Colors.primary300,
            headerTitleStyle: {fontFamily: "mountain", fontSize: 40},
            contentStyle: {backgroundColor: Colors.primary800},
          }}
          >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Campground Locations",
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
