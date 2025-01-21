import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, Dimensions } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

const { width, height } = Dimensions.get('window');

export default function App() {
  useEffect(() => {
    // Lock the screen to landscape mode
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    // Cleanup function to unlock orientation when the component is unmounted
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootcontainer}>
        {/* Left Side - 1/3 width */}
        <View style={styles.leftSide}>
          {/* Top Section - 3/4 of left side height */}
          <View style={styles.topSection}>
            <Image 
              style={[styles.imageBox, { width: width * 0.4, height: width * 0.4 }]} 
              source={require("../../assets/images/selfportrait.jpg")} 
            />
          </View>

          {/* Bottom Section - 1/4 of left side height */}
          <View style={styles.bottomSection}>
            <Text 
              style={styles.text} 
              onPress={() => Linking.openURL("https://robertusasa.z13.web.core.windows.net/")}
            >
              Robert Pelot
            </Text>
          </View>
        </View>

        {/* Right Side - 2/3 width */}
        <View style={styles.rightSide}>
          <Text 
            style={styles.text} 
            onPress={() => Linking.openURL("mailto:pelotrobert3@gmail.com")}
          >
            PelotRobert3@gmail.com
          </Text>
          <Text 
            style={styles.text} 
            onPress={() => Linking.openURL("tel:+18033207999")}
          >
            1-803-320-7999
          </Text>
          <Text 
            style={styles.text} 
            onPress={() => Linking.openURL("https://github.com/Robert-Pelot")}
          >
            My GitHub link
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    flexDirection: 'row', // Align left and right side horizontally
    backgroundColor: "#fff",
  },
  leftSide: {
    flex: 1, // This takes 1/3 of the total width
    height: '100%',
    flexDirection: 'column', // Arrange top and bottom sections vertically
  },
  topSection: {
    flex: 3, // Takes up 3/4 of the left side's height
    backgroundColor: "yellow",
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1, // Takes up 1/4 of the left side's height
    backgroundColor: "#8C9F84",
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    resizeMode: 'cover',
    borderRadius: 10, // Optional: adds rounded corners to the image
  },
  rightSide: {
    flex: 2, // This takes 2/3 of the total width
    height: '100%',
    backgroundColor: "#A8C2A5",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontStyle: "italic",
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 10,
  },
});