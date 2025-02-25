import React from "react";
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";
import { useRouter, Link } from 'expo-router';
import Colors from "../constants/colors";

const HalfScreenLayout = () => {
  const router =useRouter();
  return (
    <View style={styles.container}>
      {/* ✅ Top Half - Text Content 
      onPress={() => router.push('/appetizer')
      */}
      <View style={styles.topHalf}>
        <Text style={styles.text}>Fusion Asia</Text>
        <Text style={styles.text}>1776 History Road</Text>
        <Text style={styles.text}>Conway, SC 29526</Text>
        <Text style={styles.text}>10 AM - 10 PM | Weekends 10 AM - 11 PM</Text>

        {/* ✅ Added Menu & Home Links */}
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={() => router.push("./MenuScreen")}>
            <Text style={styles.link}>Menu</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ✅ Bottom Half - Two Images */}
      <View style={styles.bottomHalf}>
        <Image source={require("@/assets/images/Entrees/BellPeppers.jpg")} style={styles.image} resizeMode="cover" />
        <Image source={require("@/assets/images/desserts/cheesecake.jpg")} style={styles.image} resizeMode="cover" />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    paddingHorizontal: 20,
  },
  bottomHalf: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: width / 2,
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  linkContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  link: {
    color: "#FFD700", // Gold color for contrast
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    textDecorationLine: "underline",
  },
});

export default HalfScreenLayout;
