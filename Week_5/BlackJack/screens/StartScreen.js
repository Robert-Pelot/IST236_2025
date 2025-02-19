import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, Image } from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";

function StartGameScreen(props) {
  // set safe area scre3en boundaries
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingBottom: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
        <View style={styles.titleContainer}>
            <Title>BlackJack 21</Title>
        </View>
        <View style={styles.imageContainer}>
            <Image 
              source={require("../assets/images/blackjackbg.png")}
              style={styles.image}
            />
        </View>
        <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Play Now</NavButton>
        </View>

    </View>
  );
}

export default StartGameScreen;

styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});
