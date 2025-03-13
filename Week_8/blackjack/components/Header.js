import { Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

function Title2(props) {
  const { width, height } = useWindowDimensions();
      
  let size = width * 0.1

  if (width > height) {
      size = height * 0.1
  }

  return <Text style={[styles.hand, {fontSize: size}]}>{props.children}</Text>;
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
