import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function HomeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
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
        <Title>House of Blues</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/venue.jpg")}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("Tel:8432723000")}
        >
          843-272-3000
        </Text>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/DBjWtr5QhNjYredGA")
          }
        >
          4640 Hwy 17 South{"\n"}North Myrtle Beach{"\n"}SC 29582
        </Text>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://www.houseofblues.com/myrtlebeach")
          }
        >
          WWW.HouseOfBlues.com
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>View Events</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 300,
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center",
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 7,
    color: Colors.primary500,
    fontFamily: "squealer",
  },
  buttonContainer: {
    flex: 1,
  }
});
