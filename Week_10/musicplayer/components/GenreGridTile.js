const { LinearGradient } = require("expo-linear-gradient");
import { Pressable, View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import Colors from "../constants/colors";

const screenWidth = Dimensions.get('window').width;

function GenreGridTile(props) {
  return (
    <View style={StyleSheet.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={props.onPress}
      >
        <LinearGradient
          colors={[
            props.color,
            props.color,
            props.color,
            props.color,
            props.color,
            props.color,
            Colors.accent800,
          ]}
          style={styles.innerContainer}
        >
          <Text style={styles.title}>{props.title}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

export default GenreGridTile;

const styles = StyleSheet.create({
    gridItem: {
      flex: 1,
      margin: 16,
      borderRadius: 8,
      elevation: 4,
      backgroundColor: "white",
      shadowColor: "black",
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    margin: 16,
    padding: 16,
    height: 150,
    width: (screenWidth - 60)/2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "jazzBold",
  },
});
