import { Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {
  return (
    <Pressable
      android_ripple={{ color: "grey" }}
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: Colors.primary500,
    backgroundColor: Colors.accent500,
    borderRadius: 300,
    width: 300,
    paddingHorizontal: 10,
  },
  pressedItem: {
    opacity: 0.3,
    overflow: "hidden",
  },
  textContainer: {},
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "poker",
  },
});
