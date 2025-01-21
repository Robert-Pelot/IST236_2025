import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={styles.rootcontainer}>
        <View style={styles.imageContainer}>
          <Image 
            style={styles.imageBox} 
            source={require("../assets/images/Storefront.jpg")} 
          />
        </View>
        <View style={styles.informationContainer}>
          <Text 
            style={styles.text} 
            onPress={() => Linking.openURL("https://stores.dickssportinggoods.com/sc/north-myrtle-beach/1139/?seo=localpack")}
            >
              Dick's Sporting Goods
          </Text>
          <Text 
            style={styles.text} 
            onPress={() => Linking.openURL("https://stores.dickssportinggoods.com/sc/north-myrtle-beach/1139/?seo=localpack")}
            >
              www.dickssportinggoods.com
          </Text>
          <Text 
            style={styles.text} 
            onPress={() => Linking.openURL("tel:+18432132103")}
            >
              (843) 213-2103
          </Text>
          <Text 
            style={styles.text} 
            onPress={() => Linking.openURL("https://maps.app.goo.gl/LdhTAiuG7QxcXxax6")}
            >
              1536 Highway 17 North, 
          </Text>
          <Text 
            style={styles.text} 
            onPress={() => Linking.openURL("https://maps.app.goo.gl/LdhTAiuG7QxcXxax6")}
            >
              North Myrtle Beach, SC 29582</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 3,
    width: "100%",
    backgroundColor: "#74B096",
    paddingTop: 40, 
  },
  imageBox: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 5, 
    borderColor: "#74B096"
  },
  informationContainer: {
    flex: 4,
    backgroundColor: "#74B096",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontStyle: "italic",
    backgroundColor: "#74B096",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
