import { View, StyleSheet, Text, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";
import Header from "../components/Header.js";

styles = StyleSheet.create({
  gameOverScreenRootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: "center",
  },
  scoreText: {
    fontSize: 50,
    color: Colors.primary500,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

function GameOverScreen(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  const playerScore = 21;
  const computerScore = 21;

  let titleText = <Title>It's a Tie</Title>;

  if (
    (playerScore <= 21 && playerScore > computerScore) ||
    (playerScore < -21 && computerScore > 21)
  )
    titleText = <Title>Player Win's</Title>;

  if (
    (computerScore <= 21 && computerScore > playerScore) ||
    (computerScore < -21 && playerScore > 21)
  )
    titleText = <Title>Computer Win's</Title>;

  return (
    <View
      style={[
        styles.gameOverScreenRootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.scoreContainer}>{titleText}</View>
      <View>
        <Header>Computer Score: </Header>
        <Text>
          {" "}
          style={styles.scoreText} {computerScore}
        </Text>
      </View>
      <View style={styles.scoreContainer}>{titleText}</View>
      <View style={styles.scoreContainer}>
        <Header>Player Score: </Header>
        <Text style={styles.scoreText}>
          {" "}
          style={styles.scoreText} {playerScore}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Play Now</NavButton>
      </View>
    </View>
  );
}

export default GameOverScreen;
