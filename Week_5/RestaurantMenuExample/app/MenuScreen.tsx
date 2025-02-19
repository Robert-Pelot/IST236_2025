import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

interface MenuItem {
  id: string;
  title: string;
}

const menuItems: MenuItem[] = [
  { id: "1", title: "Home" },
  { id: "2", title: "Profile" },
  { id: "3", title: "Settings" },
  { id: "4", title: "Logout" },
];

const MenuScreen: React.FC = () => {
  const handlePress = (item: MenuItem) => {
    console.log("Selected Item:", item.title);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default MenuScreen;
