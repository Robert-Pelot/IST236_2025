import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";

function StartGameScreen(props) {
  // set safe area scre3en boundaries
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[Colors.accent800, Colors.accent200]}
      style={styles.rootContainer}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={[
            styles.rootContainer,
            {
              paddingTop: insets.top,
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
      </ScrollView>
    </LinearGradient>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 600,
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
