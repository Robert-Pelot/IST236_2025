import { Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

styles = StyleSheet.create({
  hand: {
    fontFamily: "poker kings",
    textAlign: "center",
    color: Colors.primary500,
  },
});

function Title2(props) {

  const { width, height } = useWindowDimensions();

  let size = width * 0.15
  if (width > height) {
    size = height * 0.11
}

  return <Text style={styles.hand}>{props.children}</Text>;
}

export default Title2;


