import React from "react";
import { router, useRouter } from "expo-router";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";

import Colors from "../constants/colors";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Joe's Diner.jpg")}
        style={styles.restaurantImage}
      />
      <Text style={styles.restaurantName}>Joe's Diner</Text>
      <View style={styles.detailsContainer}>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:contact@example.com")}
        >
          <Text style={styles.detailsText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => Linking.openURL("tel:+18432945637")}>
          <Text style={styles.detailsText}>Phone: +1 (843) 294-5637</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.google.com/maps/search/2895+Fred+Nash+Blvd,+Myrtle+Beach,+SC+29577"
            )
          }
        >
          <Text style={styles.detailsText}>
            Address: 2895 Fred Nash Blvd, Myrtle Beach, SC. 29577
          </Text>
        </TouchableOpacity>
        {/* Just a note here - but Joe's Diner has no website, so I used a fake address */}
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.joesdiner.com")}
        >
          <Text style={styles.detailsText}>Website: www.joesdiner.com</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => {
          try {
            router.push("/MenuScreen");
          } catch (error) {
            console.error("Navigation error:", error);
          }
        }}
      >
        <Text style={styles.buttonText}>See Menu</Text>
      </TouchableOpacity>
      <Text style={styles.tytext}>TY for visiting my app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: Colors.primary500,
  },
  restaurantImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  detailsContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: Colors.accent500,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    marginTop: 20,
  },
  detailsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    color: "white",
    marginBottom: 8,
    textDecorationLine: "underline",
  },
  buttonStyles: {
    marginTop: 10,
    backgroundColor: Colors.accent500,
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  tytext: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

export default App;
