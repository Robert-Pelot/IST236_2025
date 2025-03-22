import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { VACATION_DESTINATIONS, COUNTRIES } from "../data/dummy-data";
import CampgroundItem from "../components/CampgroundItem";

function CampgroundOverviewScreen(props) {
  const countryId = props.route.params.stateId;

  useLayoutEffect(() => {
    const country = COUNTRIES.find((country) => country.id === countryId);
    props.navigation.setOptions({ title: country ? country.name : null });
  }, [countryId, props.navigation]);

  const displayedCampgrounds = VACATION_DESTINATIONS.filter((campgroundItem) => {
    return campgroundItem.countryId === countryId;
  });

  function renderCampgroundItem(itemData) {
    const campgroundItemProps = {
        name: itemData.item.name,
        imageUrl: itemData.item.imageUrl,
        numVisitors: itemData.item.numVisitors,
        foundedYear: itemData.item.foundedYear,
        rating: itemData.item.rating,
        listIndex: itemData.index
    }
    console.log(campgroundItemProps.name)
    console.log(campgroundItemProps.imageUrl)
    return <CampgroundItem {...campgroundItemProps} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedCampgrounds}
        keyExtractor={(item) => item.id}
        renderItem={renderCampgroundItem}
      />
    </View>
  );
}

export default CampgroundOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});