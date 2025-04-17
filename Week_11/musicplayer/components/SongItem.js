import { useNavigation } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const paddedSeconds =
    remainingSeconds < 10 ? "0${remainingSeconds}" : remainingSeconds;
  return "${minutes}:${paddedSeconds}";
}

function SongItem(props) {
  const navigation = useNavigation();

  function selectedSongHandler(){
    navigation.navigate("SongDetail", {
      songId: props.id
    })
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={selectedSongHandler}
      >
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.innerRowContainer}>
              <Text numberOfLines={1} style={styles.artist}>
                Artist: {props.artist}
              </Text>
              <Text style={styles.year}>{props.releaseYear}</Text>
            </View>
            <Text style={styles.duration}>
              Duration: {formatTime(props.duration)}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default SongItem;

const styles = StyleSheet.create({
itemContainer: {
    backgroundColor: "#CCC",
    paddingHorizontal: 5,
    paddingTop: 3,
    marginBottom: 3,
    borderRadius: 7,
},
button: {
    flex: 1,
},
buttonPressed: {
    opacity: 0.5,
},
rowContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
},
image: {
    width: "25%",
    height: "100%",
    resizeMode: "center",
    marginBottom: 10,
},
infoContainer: {
    width: "75%",
    paddingLeft: 20,
},
title: {
    fontFamily: "jazzBold",
    textAlign: "left",
    fontSize: 25,
},
artist: {
    width: "85%",
    fontSize: 14,
},
year: {
    fontSize: 14,
    fontWeight: "bold",
},
innerRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
},
duration: {
    fontSize: 13,
    fontStyle: "italic",
},
});
