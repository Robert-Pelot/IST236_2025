import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";

function GameOverScreen(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();
  const playerScore = props.user;
  const computerScore = props.computer;

  let titleText = <Header>It's a Tie</Header>;
  if (
    (playerScore <= 21 && playerScore > computerScore) ||
    (playerScore <= 21 && computerScore > 21)
  )
    titleText = <Header>Player Wins!</Header>;
  if (
    (computerScore <= 21 && computerScore > playerScore) ||
    (computerScore <= 21 && playerScore > 21)
  )
    titleText = <Header>Computer Wins!</Header>;

  const { width, height } = useWindowDimensions();

  let size = width * 0.2;

  if (width > height) {
    size = height * 0.15;
  }

  let content = (
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
      <View style={styles.titleContainer}>{titleText}</View>

      <View style={[styles.scoreContainer, { height: height * 0.25 }]}>
        <Header>Computer Score:</Header>
        <Text style={[styles.scoreText, { fontSize: size }]}>
          {computerScore}
        </Text>
      </View>

      <View style={[styles.scoreContainer, { height: height * 0.25 }]}>
        <Header>Player Score:</Header>
        <Text style={[styles.scoreText, { fontSize: size }]}>
          {playerScore}
        </Text>
      </View>

      <View style={[styles.buttonContainer, { height: height * 0.25 }]}>
        <NavButton onPress={props.onNext}>Play Now</NavButton>
      </View>
    </View>
  );

  if (width > height) {
    content = (
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
        <View style={styles.titleContainer}>{titleText}</View>

        <View style={styles.rowContainer}>
          <View style={[styles.scoreContainer, { height: height * 0.3 }]}>
            <Header>Computer Score:</Header>
            <Text style={[styles.scoreText, { fontSize: size }]}>
              {computerScore}
            </Text>
          </View>

          <View style={[styles.scoreContainer, { height: height * 0.3 }]}>
            <Header>Player Score:</Header>
            <Text style={[styles.scoreText, { fontSize: size }]}>
              {playerScore}
            </Text>
          </View>
        </View>

        <View style={[styles.buttonContainer, { height: height * 0.25 }]}>
          <NavButton onPress={props.onNext}>Play Now</NavButton>
        </View>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={[Colors.accent200, Colors.primary800, Colors.accent200]}
      style={styles.rootContainer}
    >
      {content}
    </LinearGradient>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    color: Colors.primary500,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  }
});
