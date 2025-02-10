import { Image, View, Text, StyleSheet } from "react-native";


function RestaurantItem(props) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.itemTitle}> 
                    {props.name}
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.itemImage} source={props.itemImage} />
            </View>
            <View style={styles.ratingsContainer}>
                <Text style={styles.itemRating}>{props.rating} / 10</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: "white",
    borderwidth: 3,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    borderwidth: 3,
    borderRadius: 5,
  },
  itemImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  ratingsContainer: {
    backgroundColor: "white",
    borderwidth: 3,
    borderRadius: 5,
  },
  itemRating: {
    fontSize: 30,
    textAlign: "center",
  },  
  })

export default RestaurantItem;

