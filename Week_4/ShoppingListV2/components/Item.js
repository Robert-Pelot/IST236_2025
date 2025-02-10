import { View, Text, Pressable, StyleSheet } from "react-native";

function Item(props) {
  return (
    <View style={styles.item}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.itemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  item: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5E08CC",
    width: 350,
    alignItems: "center",
  },
  pressedItem: {
    opacity: 0.5,
  },
  itemText: {
    color: "#ffffff",
    padding: 8,
  },
});
