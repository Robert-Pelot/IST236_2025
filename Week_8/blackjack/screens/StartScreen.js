import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, Image, Dimensions, ScrollView, useWindowDimensions } from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";

function StartGameScreen(props) {
  // set safe area scre3en boundaries
  const insets = useSafeAreaInsets();
  const {width, height} = useWindowDimensions();

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
              height: height,
              width: width,
            },
          ]}
        >
          <View style={[styles.titleContainer, {height: height *0.15}]}>
            <Title>BlackJack 21</Title>
          </View>
          <View style={[styles.imageContainer, {height: height *.5}]}>
            <Image
              source={require("../assets/images/blackjackbg.png")}
              style={styles.image}
            />
          </View>
          <View style={[styles.buttonContainer, {height: height *0.15}]}>
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
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "80%",
    resizeMode: "contain",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
