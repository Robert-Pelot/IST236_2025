import { useLayoutEffect } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SONGS, GENRES } from "../data/dummy-data";
import SongItem from "../components/SongItem";

function SongsOverviewScreen(props) {
  const genreId = props.route.params.genreId;

  useLayoutEffect(() => {
    const genre = GENRES.find((genre) => genre.id === genreId);
    props.navigation.setOptions({ title: genre ? genre.title : null });
  }, [genreId, props.navigation]);

  const displayedSongs = SONGS.filter((songItem) => {
    return songItem.genreIds.indexOf(genreId) >= 0;
  });

  function renderSongItem(itemData) {
    const songItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      artist: itemData.item.artist,
      duration: itemData.item.duration,
      releaseYear: itemData.item.releaseYear,
      listIndex: itemData.index,
    };
    return <SongItem {...songItemProps} />;
  }

  return (
    <ImageBackground
      source={require("../assets/images/music_back.jpeg")}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.ImageBackground}
    >
      <View style={styles.container}>
        <FlatList
          data={displayedSongs}
          keyExtractor={(item) => item.id}
          renderItem={renderSongItem}
        />
      </View>
    </ImageBackground>
  );
}

export default SongsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
