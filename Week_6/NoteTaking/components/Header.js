import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title2(props) {
  return <Text style={styles.hand}>{props.children}</Text>;
}

export default Title2;

styles = StyleSheet.create({
  hand: {
    fontSize: 40,
    fontFamily: "poker kings",
    textAlign: "center",
    color: Colors.primary500,
  },
});
