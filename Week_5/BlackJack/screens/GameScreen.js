import { View, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import NavButton from "../components/NavButton";
import Cards from "../constants/cards";
import Header from "../components/Header";

styles = StyleSheet.create({
  gameScreenRootContainer: {
    flex: 1,
  },
  gameScreenHeaderContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  computerImageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  computerImage: {
    height: 150,
    width: 100,
    resizeMode: "contain",
  },
  playerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  playerImage: {
    height: 150,
    width: 100,
    resizeMode: "contain",
  },
  gameScreenButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  gameScreenButtonContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 25,
  },
});

function GameScreen(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.gameScreenRootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.gameScreenHeaderContainer}>
        <Header>Computer's Hand</Header>
      </View>

      <View style={styles.computerImageContainer}>
        <Image style={styles.computerImage} source={require("../assets/images/cardback1.png")} />
        <Image style={styles.computerImage} source={Cards.aceSpades.picture} />
      </View>

      <View style={styles.gameScreenHeaderContainer}>
        <Header>Weird Text Here Player's Hand</Header>
      </View>

      <View style={styles.playerImageContainer}>
        <Image style={styles.playerImage} source={Cards.tenHearts} />
        <Image style={styles.computerImage} source={Cards.aceHearts.picture} />
      </View>

      <View style={styles.gameScreenButtonsContainer}>
        <View style={styles.gameScreenButtonContainer}>
          <NavButton onPress={props.onNext}>Hit Me!</NavButton>
        </View>
        <View style={styles.gameScreenButtonContainer}>
          <NavButton onPress={props.onNext}>Stay!</NavButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;
