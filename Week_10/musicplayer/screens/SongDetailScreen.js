import { useLayoutEffect, useState } from "react";
import { SONGS } from "../data/dummy-data"; // Import your SONGS data
import FavoriteButton from "../components/FavoriteButton";
import { ImageBackground, Text, View, StyleSheet, Image, Pressable, Linking } from "react-native";
import Colors from "../constants/colors";
import LineSeparator from "../components/LineSeparator";
import { Entypo } from "@expo/vector-icons";



function SongDetailScreen(props) {
  const songId = props.route.params.songId; // Get the songId from navigation params

  const selectedSong = SONGS.find((song) => song.id === songId); // Use SONGS here, not SongDetailScreen

  const [pressed, setPressed] = useState(false);

  // Function to handle the favorite button press
  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedSong ? selectedSong.title : "", 
      headerRight: () => {
        return (
          <FavoriteButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler, selectedSong]);

  return (
    <ImageBackground
        source={require("../assets/images/music_back.jpeg")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
    >
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: selectedSong.imageUrl }} style={styles.image}/>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{selectedSong.title}</Text>
                <Text style={styles.artist}>{selectedSong.artist}</Text>
                <View styles={styles.rowContainer}>
                    <Text numberOfLines={1} style={styles.album}>
                        Album: {selectedSong.album}
                    </Text>
                    <Text numberOfLines={1} style={styles.year}>
                        Year: {selectedSong.releaseYear}
                    </Text>
                </View>
                <Text numberOfLines={1} style={styles.producer}>
                    Produced By: {selectedSong.producer}
                </Text>
                <Text numberOfLines={1} style={styles.label}>
                    Label: {selectedSong.label}
                </Text>

                <LineSeparator />

                <View style={styles.rowContainer}>
                    <Pressable onPress={() => Linking.openURL(selectedSong.youtubeUrl)}>
                        <Entypo name="youtube" size={60} color={Colors.accent200} />
                    </Pressable>
                    <Pressable onPress={() => Linking.openURL(selectedSong.spotifyUrl)}>
                        <Entypo name="spotify" size={60} color={Colors.accent200} />
                    </Pressable>
                    <Pressable onPress={() => Linking.openURL(selectedSong.internal)}>
                        <Entypo name="folder-music" size={60} color={Colors.accent200} />
                    </Pressable>

                </View>
            </View>
        </View>
    </ImageBackground>
  );
}

export default SongDetailScreen;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    backgroundImage: {
        opacity: 0.1,
    },
    imageContainer: {
        flex: 1,
        alignItems: "center",
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "contain",
    },
    detailsContainer: {
        flex: 1,
        alignItems: "center",
    },
    rowContainer: {
        paddingTop: 10,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
    title: {
        paddingTop: 10,
        width: "100%",
        textAlign: "center",
        fontSize: 40,
        fontFamily: "jazzBold",
        color: Colors.primary300,
    },
    artist: {
        paddingTop: 10,
        textAlign: "center",
        fontSize: 30,
        fontFamily: "jazzBold",
        color: Colors.accent500,
    },
    album: {
        paddingRight: 5,
        maxWidth: "70%",
        color: Colors.accent800,
        fontSize: 17,
        fontFamily: "house",
    },
    year: {
        color: Colors.accent800,
        fontSize: 17,
        fontFamily: "house",
    },
    producer: {
        width: "100%",
        textAlign: "left",
        color: Colors.accent800,
        fontFamily: "house",
        fontSize: 12,
    },
    label: {
        width: "100%",
        textAlign: "left",
        color: Colors.accent800,
        fontFamily: "house",
        fontSize: 12,
        paddingBottom: 10,
    },
  });
