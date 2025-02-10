import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      {/* Set status bar styling */}
      <StatusBar style="light" />
      {/* Set safeareaview screen container */}
      <SafeAreaView style={styles.appContainer}>
        {/* Set Title View */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Shopping List</Text>
        </View>

        {/* Set add item button container */}
        <View style={styles.buttonContainer}>
          <Text style={styles.buttontext}>Add Item Button Goes Here</Text>
        </View>

        {/* set items to get title container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Items to Get</Text>
        </View>

        {/* set items to get list */}
        <View style={styles.listContainer}>
          <Text style={styles.listText}>List of items goes here</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1E085A",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  titleContainer: {
    flex: 1,  
    justifyContent: "center", 
    backgroundColor: "white",
    margin: 10,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 40,
    color: "#5E08CC",


  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  },
  buttontext: {

  },
  subtitleContainer: {
    flex: 1,
    justifyContent: "center", 
    backgroundColor: "white",
    margin: 10,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 30,
    color: "#5E08CC",
  },
  listContainer: {
    flex: 7,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  listText: {

  },
});
