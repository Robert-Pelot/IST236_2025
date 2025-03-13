import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import NavButton from "../components/NavButton";
import Header from "../components/Header";
import Cards from "../constants/cards";
import { useEffect, useState } from "react";

function generateRandomBetween(min, max, exclude) {
  const cardKeys = Object.keys(Cards);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  const cardName = cardKeys[rndNum];

  if (exclude.includes(cardName)) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return cardName;
  }
}

function GameScreen(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  // Set state variables for drawn cards
  const [drawnCards, setDrawnCards] = useState([]);
  const [userHand, setUserHand] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [numUserHand, setNumUserHand] = useState(0);
  const [computerHand, setComputerHand] = useState([]);
  const [computerScore, setComputerScore] = useState(0);
  const [userFinished, setUserFinished] = useState(false);

  function drawUserCardHandler() {
    // generate a random card name
    let userCard = generateRandomBetween(0, 52, drawnCards);

    // Set the card as drawn from the deck
    setDrawnCards((prevDrawnCards) => {
      return [userCard, ...prevDrawnCards];
    });

    // Set the card in the user hand
    setUserHand((prevUserCards) => {
      return [userCard, ...prevUserCards];
    });

    // set the number of cards in players hand
    setNumUserHand(userHand.length);

    // calculate the new score for the user to see if the card will make the player bust
    if (Cards[userCard].value + userScore > 21) {
      // If the new card will make the player bust, check to see if there are any aces in the users hand
      // Ace of Clubs
      if (userHand.includes("aceClubs")) {
        // change aceclubs to lowaceclubs
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceClubs")] = "lowAceClubs";
          return newUserCards;
        });

        // Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
        // ace of diamonds
      } else if (userHand.includes("aceDiamonds")) {
        // change aceDiamonds to lowAceDiamonds
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceDiamonds")] = "lowAceDiamonds";
          return newUserCards;
        });

        // Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
        // Ace of Hearts
      } else if (userHand.includes("aceHearts")) {
        // change acehearts to lowAcehearts
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceHearts")] = "lowAceHearts";
          return newUserCards;
        });

        // Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
        // Ace of Spades
      } else if (userHand.includes("aceSpades")) {
        // change aceClubs to lowAceClubs
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceSpades")] = "lowAceSpades";
          return newUserCards;
        });
        // Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
        // No Aces
      } else {
        // If the player has no aces then add score and they bust
        setUserScore((prevUserScore) => {
          return prevUserScore + Cards[userCard].value;
        });
      }
    } else {
      // If the player won't bust, add the score like normal
      setUserScore((prevUserScore) => {
        return prevUserScore + Cards[userCard].value;
      });
    }
  }

  function drawComputerCardHandler() {
    // Generate a random card name
    let computerCard = generateRandomBetween(0, 52, drawnCards);

    // set the card as drawn from the deck
    setDrawnCards((prevDrawnCards) => {
      return [computerCard, ...prevDrawnCards];
    });

    // Set the card as drawn from the deck
    setComputerHand((prevComputerCards) => {
      return [computerCard, ...prevComputerCards];
    });

    // calculate the new score for the user to see if the card will make the computer bust
    if (Cards[computerCard].value + computerScore > 21) {
      // If the new card will make the computer bust, check to see if there are any aces in the computers hand
      // Ace of Clubs
      if (computerHand.includes("aceClubs")) {
        // change aceclubs to lowaceclubs
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceClubs")] =
            "lowAceClubs";
          return newComputerCards;
        });

        // Change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
        // ace of diamonds
      } else if (computerHand.includes("aceDiamonds")) {
        // change aceDiamonds to lowAceDiamonds
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceDiamonds")] =
            "lowAceDiamonds";
          return newComputerCards;
        });

        // Change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
        // Ace of Hearts
      } else if (computerHand.includes("aceHearts")) {
        // change acehearts to lowAcehearts
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceHearts")] =
            "lowAceHearts";
          return newComputerCards;
        });

        // Change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
        // Ace of Spades
      } else if (computerHand.includes("aceSpades")) {
        // change aceSpades to lowAceSpades
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceSpades")] =
            "lowAceSpades";
          return newComputerCards;
        });

        // Change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
        // No Aces
      } else {
        // If the computer has no aces then add score and they bust
        setComputerScore((prevComputerScore) => {
          return prevComputerScore + Cards[computerCard].value;
        });
      }
    } else {
      // If the computer won't bust, add the score like normal
      setComputerScore((prevComputerScore) => {
        return prevComputerScore + Cards[computerCard].value;
      });
    }
  }

  // Function that handles the user finishing the game and adding cards to computers hand
  function stayHandler() {
    // Set user finished to True
    setUserFinished(true);

    // attempt to add up to 10 cards to the computers hand
    if (computerScore <= 16) {
      // wait for the draw handler to complete before continuing the loop
      drawComputerCardHandler();
    }
  }

  // Hook that will occur only when the page is added to the UI
  useEffect(() => {
    setUserHand([]);
    setComputerHand([]);
    setDrawnCards([]);
    setNumUserHand(0);
    setUserScore(0);
    setComputerScore(0);
    setUserFinished(false);

    // Draw initial 2 cards for user and computer
    drawComputerCardHandler();
    drawComputerCardHandler();
    drawUserCardHandler();
    drawUserCardHandler();
  }, []); // Since no dependencies, only resolves when the game screen is added to the UI

  // Hook that will trigger when the user score changes to check to see if the user busts
  useEffect(() => {
    if (userScore > 21) {
      props.onSetUserScore(userScore);
      props.onSetComputerScore(computerScore);
      props.onNext();
    }
  }, [userScore]); // Dependant on user score and will activate if user score changes

  useEffect(() => {
    if (userFinished === true && computerScore > 16) {
      props.onSetUserScore(userScore);
      props.onSetComputerScore(computerScore);
      props.onNext();
    }
  }, [userFinished, computerScore]);

  const { width, height } = useWindowDimensions();

  let content = (
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
      <View style={[styles.titleContainer, { height: height * 0.1 }]}>
        <Header>Computer's Hand</Header>
      </View>

      <View style={[styles.computerImageContainer, { height: height * 0.25 }]}>
        <Image
          style={[styles.computerImage, { width: width * 0.25 }]}
          source={require("../assets/images/cardback1.png")}
        />
        <View style={{ marginLeft: -15 }}>
          <Image
            style={[styles.computerImage, { width: width * 0.25 }]}
            source={
              computerHand.length === 0
                ? require("../assets/images/cardback1.png")
                : Cards[computerHand[1]].picture
            }
          />
        </View>
      </View>
      <View style={[styles.titleContainer, { height: height * 0.1 }]}>
        <Header>Player's Hand</Header>
      </View>
      <View style={[styles.playerImageContainer, { height: height * 0.25 }]}>
        {userHand.map((index) => {
          return (
            <View key={index} style={{ marginLeft: -15 * (numUserHand + 1) }}>
              <Image
                style={[styles.playerImage, { width: width * 0.25 }]}
                source={
                  userHand.length === 0
                    ? require("../assets/images/cardback1.png")
                    : Cards[index].picture
                }
              />
            </View>
          );
        })}
      </View>

      <View style={[styles.buttonsContainer, { heith: height * 0.2 }]}>
        <NavButton style={styles.button} onPress={drawUserCardHandler}>
          Hit Me
        </NavButton>
        <NavButton style={styles.button} onPress={stayHandler}>
          Stay
        </NavButton>
      </View>
    </View>
  );

  if (width > height) {
    content = (
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
        <View style={styles.rowContainer}>
          <View style={styles.innerRowContainer}>
            <View style={[styles.titleContainer, { height: height * 0.1 }]}>
              <Header>Computer's Hand</Header>
            </View>

            <View
              style={[styles.computerImageContainer, { height: height * 0.15 }]}
            >
              <Image
                style={[styles.computerImage, { width: width * 0.15 }]}
                source={require("../assets/images/cardback1.png")}
              />
              <View style={{ marginLeft: -15 }}>
                <Image
                  style={[styles.computerImage, { width: width * 0.15 }]}
                  source={
                    computerHand.length === 0
                      ? require("../assets/images/cardback1.png")
                      : Cards[computerHand[1]].picture
                  }
                />
              </View>
            </View>
          </View>
          <View style={styles.innerRowContainer}>
            <View style={[styles.titleContainer, { height: height * 0.1 }]}>
              <Header>Player's Hand</Header>
            </View>
            <View
              style={[styles.playerImageContainer, { height: height * 0.15 }]}
            >
              {userHand.map((index) => {
                return (
                  <View
                    key={index}
                    style={{ marginLeft: -15 * (numUserHand + 1) }}
                  >
                    <Image
                      style={[styles.playerImage, { width: width * 0.15 }]}
                      source={
                        userHand.length === 0
                          ? require("../assets/images/cardback1.png")
                          : Cards[index].picture
                      }
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        <View style={[styles.buttonsContainer, { heith: height * 0.2 }]}>
          <NavButton style={styles.button} onPress={drawUserCardHandler}>
            Hit Me
          </NavButton>
          <NavButton style={styles.button} onPress={stayHandler}>
            Stay
          </NavButton>
        </View>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../assets/images/blackjack_felt.jpg")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>{content}</ScrollView>
    </ImageBackground>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.35,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  computerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  computerImage: {
    resizeMode: "contain",
  },
  playerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  playerImage: {
    resizeMode: "contain",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  innerRowContainer: {
    flex: 1,
  },
});
