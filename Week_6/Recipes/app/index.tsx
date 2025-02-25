import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "../screens/HomeScreen";
import RecipeScreen from "../screens/RecipeScreen";
import AddRecipeScreen from "../screens/AddRecipeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import { useFonts } from "expo-font";
import RecipeItem from "../components/RecipeItem";

export default function Index() {
  const [fontsLoaded] = useFonts({
    noteFont: require("../assets/fonts/Note.ttf"),
    paperNote: require("../assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("../assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("../assets/fonts/Papernotes Bold.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("home");
  // using current state of 4 to allow for the existing 3 recipes that were built in
  const [currentID, setCurrentID] = useState(14);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Spaghetti Bolognese",
      text: "Ingredients:\n- Spaghetti\n- Ground Beef\n- Tomatoes\n- Garlic\n- Olive Oil\nInstructions:\n1. Cook spaghetti\n2. Brown the beef\n3. Add garlic and tomatoes\n4. Mix spaghetti with sauce",
    },
    {
      id: 2,
      title: "Chicken Salad",
      text: "Ingredients:\n- Chicken Breast\n- Lettuce\n- Tomatoes\n- Cucumber\n- Olive Oil\nInstructions:\n1. Grill chicken\n2. Chop veggies\n3. Toss with dressing",
    },
    {
      id: 3,
      title: "Pancakes",
      text: "Ingredients:\n- Flour\n- Eggs\n- Milk\n- Baking Powder\n- Butter\nInstructions:\n1. Mix dry ingredients\n2. Add milk and eggs\n3. Cook on a griddle\n4. Serve with syrup",
    },
    {
      id: 4,
      title: "Caesar Salad",
      text: "Ingredients:\n- Romaine Lettuce\n- Croutons\n- Parmesan Cheese\n- Caesar Dressing\nInstructions:\n1. Chop lettuce\n2. Add croutons and cheese\n3. Toss with dressing",
    },
    {
      id: 5,
      title: "Grilled Cheese Sandwich",
      text: "Ingredients:\n- Bread\n- Cheese (Cheddar)\n- Butter\nInstructions:\n1. Butter the bread\n2. Add cheese\n3. Grill in a pan until golden",
    },
    {
      id: 6,
      title: "Margarita Pizza",
      text: "Ingredients:\n- Pizza Dough\n- Tomato Sauce\n- Mozzarella Cheese\n- Fresh Basil\nInstructions:\n1. Roll out dough\n2. Add sauce and cheese\n3. Bake in oven\n4. Garnish with basil",
    },
    {
      id: 7,
      title: "Chicken Curry",
      text: "Ingredients:\n- Chicken Thighs\n- Curry Powder\n- Coconut Milk\n- Onion\n- Garlic\nInstructions:\n1. Brown chicken\n2. Add onions and garlic\n3. Stir in curry powder and coconut milk\n4. Simmer until chicken is cooked",
    },
    {
      id: 8,
      title: "Beef Tacos",
      text: "Ingredients:\n- Ground Beef\n- Taco Shells\n- Lettuce\n- Tomatoes\n- Cheese\nInstructions:\n1. Brown the beef\n2. Prepare toppings\n3. Assemble tacos",
    },
    {
      id: 9,
      title: "Vegetable Stir Fry",
      text: "Ingredients:\n- Mixed Vegetables (Carrot, Bell Pepper, Broccoli)\n- Soy Sauce\n- Olive Oil\n- Garlic\nInstructions:\n1. Stir fry veggies in oil\n2. Add garlic and soy sauce\n3. Serve over rice",
    },
    {
      id: 10,
      title: "Fish Tacos",
      text: "Ingredients:\n- White Fish Fillets\n- Corn Tortillas\n- Cabbage Slaw\n- Lime\nInstructions:\n1. Grill fish\n2. Warm tortillas\n3. Assemble tacos with slaw and fish",
    },
    {
      id: 11,
      title: "Lasagna",
      text: "Ingredients:\n- Lasagna Noodles\n- Ground Beef\n- Ricotta Cheese\n- Tomato Sauce\n- Mozzarella Cheese\nInstructions:\n1. Cook noodles\n2. Layer noodles with meat sauce and cheese\n3. Bake in the oven",
    },
    {
      id: 12,
      title: "Chocolate Chip Cookies",
      text: "Ingredients:\n- Flour\n- Sugar\n- Chocolate Chips\n- Butter\n- Eggs\nInstructions:\n1. Mix dry ingredients\n2. Cream butter and sugar\n3. Fold in chocolate chips\n4. Bake at 350°F",
    },
    {
      id: 13,
      title: "Chicken Alfredo",
      text: "Ingredients:\n- Chicken Breast\n- Fettuccine Pasta\n- Heavy Cream\n- Parmesan Cheese\n- Garlic\nInstructions:\n1. Cook pasta\n2. Grill chicken\n3. Make Alfredo sauce with cream and garlic\n4. Toss with pasta and chicken",
    },
  ]);

  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  function RecipeScreenHandler() {
    setCurrentScreen("Recipes");
  }

  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    RecipeScreenHandler();
  }

  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id); // Fixed: Return the result of filter
    });
  }

  let screen = <HomeScreen onNext={RecipeScreenHandler} />;
  if (currentScreen === "home") {
  }

  if (currentScreen === "Recipes") {
    screen = (
      <RecipeScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  if (currentScreen === "add") {
    screen = <AddRecipeScreen onNext={homeScreenHandler} 
      onAdd={addRecipeHandler}
      onCancel={RecipeScreenHandler}
    />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
