import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  SafeAreaView,
  Button,
  Pressable,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import RestaurantItem from "../../components/RestaurantItem.js";

export default function HomeScreen() {
  const [restaurantItems, setRestaurantItems] = useState([
    {
      name: "Buffalo Wild Wings",
      image: require("../../assets/images/bww.jpg"),
      rating: "8.7",
    },
    {
      name: "Moe's Southwest Grill",
      image: require("../../assets/images/moes.jpg"),
      rating: "8.5",
    },
    {
      name: "Gino's New York Pizza",
      image: require("../../assets/images/ginos.jpg"),
      rating: "8",
    },
    {
      name: "Yamato's Japanese Steakhouse",
      image: require("../../assets/images/yamatos.jpg"),
      rating: "7.5",
    },
    {
      name: "Five Guys:\n Burgers and Fries",
      image: require("../../assets/images/fiveguys.jpg"),
      rating: "7",
    },
  ]);

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 5 Restaurants</Text>
        </View>
        <View style={styles.listContainer}>
          <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          >
            {restaurantItems.map((itemData) => (
              <RestaurantItem
                name={itemData.name}
                image={itemData.image}
                rating={itemData.rating}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#84F5D3",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 35, 
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "90%",
  },

});
