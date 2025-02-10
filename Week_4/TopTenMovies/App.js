import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import MovieItem from './Components/MovieItem';
import movieData from './data/movieData';
import { Audio } from 'expo-av';

const App = () => {
  const [sound, setSound] = useState();  // Store the current sound instance

  // Function to stop the current sound (if any)
  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
    }
  };

  // Function to handle play logic for each MovieItem
  const playSound = async (soundbite) => {
    // Stop any sound that's already playing
    await stopSound();

    // Create a new sound instance and play it
    const { sound: playbackObject } = await Audio.Sound.createAsync(
      soundbite,
      { shouldPlay: true }
    );
    setSound(playbackObject);  // Save the current sound instance

    // Optional: Handle when the sound finishes playing
    playbackObject.setOnPlaybackStatusUpdate((status) => {
      if (!status.isPlaying) {
        setSound(null);  // Reset the sound state when finished
      }
    });
  };

  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Top 10 Movies</Text>
        <FlatList
          data={movieData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MovieItem
              title={item.title}
              poster={item.poster}
              rating={item.rating}
              soundbite={item.soundbite}
              playSound={playSound}  // Pass playSound function as prop
              stopSound={stopSound}  // Optionally pass stopSound as prop (if needed)
            />
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;