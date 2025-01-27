import { Pressable, View, Text, StyleSheet } from "react-native";

function item(props) {
  return (
    <View style={styles.item}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && StyleSheet.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.id)}
        >
        <Text style={styles.itemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default item;

const styles = StyleSheet.create({
  item: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5E08CC",
    width: 300,
  },
  pressedItem: {
    opacity: 0.5,
  },
  itemText: {
    color: "#ffffff",
    padding: 8,
  },
});
