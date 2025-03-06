import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { useState, useMemo, useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import HomeScreen from "../screens/HomeScreen";
import OrderReviewScreen from "../screens/OrderReview";
import * as SplashScreen from "expo-splash-screen";

export default function Index() {

  const [fontsLoaded, fontError] = useFonts({
    biker: require("../assets/fonts/RobotoSlab.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);


  const [currentScreen, setCurrentScreen] = useState("Home");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [repairTimeId, setRepairTimeId] = useState("0");

  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );
  
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [joinNewsletter, setJoinNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);


  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous);
  }

  function setJoinNewsletterHandler() {
    setJoinNewsletter((previous) => !previous);
  }

  function homeScreenHandler() {
    setCurrentPrice(0);
    for (let i = 0; i < services.length; i++) {
      services[i].value = false;
    }
    setRepairTimeId("0");
    setJoinNewsletter(false);
    setRentalMembership(false);
    setCurrentScreen("Home");
  }

  function orderReviewHandler() {
    let price = 0;
  
    // Add the selected repair time price
    if (repairTimeId !== null && repairTimeRadioButtons[repairTimeId]) {
      price += repairTimeRadioButtons[repairTimeId].price;
    }
  
    // Add the price for each selected service
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price += services[i].price;
      }
    }

    if (rentalMembership) {
      price += 100
    }
  
    // Return the total price
    setCurrentPrice(price);
    setCurrentScreen("review");
  }

  let screen;
  if (currentScreen === "Home") {
    screen = (
      <HomeScreen
        repairTimeId={repairTimeId}
        repairTimeRadioButtons={repairTimeRadioButtons}
        onSetRepairTimeID={setRepairTimeId}
        services={services}
        onSetServices={setServices}
        joinNewsletter={joinNewsletter}
        onSetJoinNewsletter={setJoinNewsletterHandler}
        onSetRentalMembership={setRentalMembershipHandler}
        rentalMembership={rentalMembership}
        onNext={orderReviewHandler}
      />
    );
  }

  if (currentScreen === "review") {
    screen = (
      <OrderReviewScreen
        speed={repairTimeRadioButtons[repairTimeId].value}
        services={services}
        price={currentPrice}
        joinNewsletter={joinNewsletter}
        rentalMembership={rentalMembership}
        onNext={homeScreenHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>
        {screen}
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "biker",
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
});