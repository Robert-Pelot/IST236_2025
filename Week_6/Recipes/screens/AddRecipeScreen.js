import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import { useState } from "react";

function AddRecipeScreen(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  const [RecipeTitle, setRecipeTitle ] = useState("");
  const [RecipeText, setRecipeText ] = useState("");

  function addRecipeHandler(){
    props.onAdd(RecipeTitle, RecipeText);
    props.onCancel();
  }

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Add New Recipes</Title>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.RecipeTitleContainer}>
            <TextInput
              placeholder="Enter Recipe Title Here"
              style={styles.RecipeTitle}
              onChangeText={setRecipeTitle}
            />
          </View>

          <View style={styles.RecipeTextContainer}>
            <TextInput
              placeholder="Enter Recipe Text Here"
              style={styles.RecipeText}
              onChangeText={setRecipeText}
              textAlignVertical="top"
              multiline
            />
          </View>

          <View style={styles.navButtonContainer}>
            <View style={styles.navButton}>
              <NavButton onNext={addRecipeHandler}>Submit</NavButton>
            </View>
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default AddRecipeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 50,
  },
  scrollContainer: {
    flex: 5,
  },
  RecipeTitleContainer: {
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  RecipeTitle: {
    color: Colors.accent800,
    fontWeight: "bold",
    fontSize: 30,
    padding: 10,
  },
  RecipeTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  RecipeText: {
    color: Colors.primary800,
    padding: 10,
  },
    navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  }
});
