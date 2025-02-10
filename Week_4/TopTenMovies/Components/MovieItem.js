import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieItem = ({ title, poster, rating, soundbite, playSound }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => playSound(soundbite)}>
        <Image source={poster} style={styles.poster} />
      </TouchableOpacity>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rating}>Rating: {rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  poster: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 14,
    color: '#555',
  },
});

export default MovieItem;