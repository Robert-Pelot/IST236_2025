import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

styles = StyleSheet.create({
  hand: {
    fontSize: 40,
    fontFamily: "poker kings",
    textAlign: "center",
    color: Colors.primary500,
  },
});

function Title2(props) {
  return <Text style={styles.hand}>{props.children}</Text>;
}

export default Title2;


