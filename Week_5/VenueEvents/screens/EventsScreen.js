
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Audio } from 'expo-av';
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import React, { useState } from "react";
import EventItem from "../components/EventItems";

function EventsScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [eventItems, setEventItems] = useState([
    {
      name: "American Floyd - The ultimate Pink Floyd Tribute Experience",
      image: require("../assets/images/americanfloyd.jpg"),
      date: "01/13/2024",
      audioUrl: require("../assets/sound/another_brick.mp3"),
      id: 1,
    },
    {
      name: "Badfish - A Tribute to Sublime",
      image: require("../assets/images/badfish.jpg"),
      date: "01/14/2024",
      audioUrl: require("../assets/sound/sublime_mix.mp3"),      
      id: 2,
    },
    {
      name: "Tell Me Lies - The Fleetwood Mac Experience",
      image: require("../assets/images/tellmelies.jpg"),
      date: "01/26/2024",
      audioUrl: require("../assets/sound/fleetwood_mac.mp3"),
      id: 3,
    },
    {
      name: "Blackberry Smoke: Be Right Here Tour",
      image: require("../assets/images/blackberry.jpg"),
      date: "02/17/2024",
      audioUrl: require("../assets/sound/one_horse_town.mp3"),
      id: 4,
    },
    {
      name: "Electric Avenue - the 90's MTV Experience",
      image: require("../assets/images/electric.jpg"),
      date: "02/23/2024",
      audioUrl: require("../assets/sound/i_would_die4u.mp3"),
      id: 5,
    },
  ]);

  const [sound, setSound] = useState();

  const playSound = async (audioUrl) => {
    if (sound) {
        await sound.stopAsync();
    }
    
    const { sound: newSound } = await Audio.Sound.createAsync(
        typeof audioUrl === 'string' ? { uri: audioUrl } : audioUrl
    );
    setSound(newSound);
    await newSound.playAsync();
};

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
      <View>
        <Title style={styles.titleContainer}>Events</Title>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={eventItems}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
                <TouchableOpacity
                    onPress={() => playSound(itemData.item.audioUrl)}>
                    <EventItem
                        name={itemData.item.name}
                        image={itemData.item.image}
                        date={itemData.item.date}
                    />
                </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Main Screen</NavButton>
      </View>
    </View>
  );
}

export default EventsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    width: "90%",
  },
  buttonContainer: {
    flex: 1,
  },
});
