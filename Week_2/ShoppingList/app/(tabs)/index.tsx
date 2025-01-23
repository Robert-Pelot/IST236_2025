import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
    {/* Set status bar styling */}
    <StatusBar style='light'/>

    {/* Set SafeAreaView Screen Container */}
    <SafeAreaView style={styles.appContainer}>

      {/* Set Title Container */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shopping List</Text>
      </View>

      {/* Set add item button container */}
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Add Item Button Goes Here</Text>
      </View>

      {/* Set Items to Get Title Container */}
      <View style={styles.subTitleContainer}>
        <Text style={styles.subtitle}>Items to Get</Text>
      </View>

      {/* Set List of Items Container */}
      <View style={styles.listContainer}>
        <Text style={styles.text}>List of Items Goes Here</Text>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#1E085A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40, 
  },
  title: {
    fontSize: 40,
    color: "#5E09CC",
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    justifyContent: "center", 
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center", 
    backgroundColor: "white", 
  },
  subtitle: {
    fontSize: 30,
    color: "#5E00CC"
  },  
  subTitleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    justifyContent: "center", 
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  listContainer: {
    flex: 7,
    justifyContent: "center", 
    backgroundColor: "#ffffff"
  },

});
