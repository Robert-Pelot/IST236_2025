import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookmarksScreen from "../screens/BookmarksScreen";
import CondoListingsScreen from "../screens/CondoListingsScreen";
import HouseListingsScreen from "../screens/HouseListingsScreen";
import TownhouseListingsScreen from "../screens/TownhouseListingsScreen";
import TrailerListingsScreen from "../screens/TrailerListingsScreen";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colors from "../constants/colors";
import { useCallback } from "react";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Listings"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "nolluqa",
          fontSize: 40,
          color: Colors.accent800,
        },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="Listings"
        component={TabsNavigator}
        options={{
          title: "ALL LISTINGS",
          drawerLabel: "RealEstate Listings",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="BookmarkedListings"
        component={BookmarksScreen}
        options={{
          title: "Saved Listings",
          drawerLabel: "Saved Listings",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "playfairBold",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      <Tabs.Screen
        name="HouseListings"
        component={HouseListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          tabBarLabel: "Houses",
        }}
      />
      <Tabs.Screen
        name="CondoListings"
        component={CondoListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="apartment" size={size} color={color} />
          ),
          tabBarLabel: "Condos",
        }}
      />
      <Tabs.Screen
        name="TownhouseListings"
        component={TownhouseListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="holiday-village" size={size} color={color} />
          ),
          tabBarLabel: "Townhouses",
        }}
      />
      <Tabs.Screen
        name="TrailerListings"
        component={TrailerListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="truck-trailer"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Mobile Homes",
        }}
      />
    </Tabs.Navigator>
  );
}

export default function Index() {
  const [fontsLoaded, fontError] = useFonts({
    playfair: require("../assets/fonts/Playfair.ttf"),
    playfairBold: require("../assets/fonts/PlayfairBold.ttf"),
    playfairItalic: require("../assets/fonts/PlayfairBoldItalic.ttf"),
    nolluqa: require("../assets/fonts/NolluqaRegular.otf"),
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
          initialRouteName="DrawerScreen"
          screenOptions={{
            headerTintColor: Colors.primary300,
            headerStyle: { backgroundColor: Colors.primary500 },
            contentStyle: { backgroundColor: "black" },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ListingDetail"
            component={ListingDetailScreen}
            options={{
              headerBackTitle: "",
            }}
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
