import { View, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import NavButton from "../components/NavButton";
import Title from '../components/Title'

styles = StyleSheet.create({
    startScreenRootContainer: {
      flex: 1,
      //borderWidth: 3,
      //borderColor: "red",
      maxheight: 800,
    },
    startScreenMainContainer: {
        flex: 1,
        flexDirection: "column",
        maxHeight: 800,
    },
    startScreenTitleContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    startScreenLowerHalf: {
        flex: 1,
    },
    startScreenImageContainer: {
      flex: 1, 
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "90%",
      height: "70%",
      resizeMode: "contain", // Ensure image scales proportionally
    },
    startScreenButtonContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

function StartGameScreen(props) {

  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.startScreenRootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
        <View style={styles.startScreenMainContainer}>
            <View style={styles.startScreenTitleContainer}> 
                <Title>BlackJack 21</Title>
            </View>
            <View style={styles.startScreenLowerHalf}>
                <View style={styles.startScreenImageContainer}>
                    <Image style={styles.image} source={require("../assets/images/blackjackbg.png")} />
                </View>
                <View style={styles.startScreenButtonContainer}>
                    <NavButton onPress={props.onNext}>Play Now</NavButton>
                </View>
            </View>

        </View>

    </View>
  );
}

export default StartGameScreen;


