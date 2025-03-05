import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { useState, useMemo } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import HomeScreen from "../screens/HomeScreen";
import OrderReviewScreen from "../screens/OrderReview";

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [currentPrice, setCurrentPrice] = useState(0);

  const sizeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "6 Inch",
        value: "6 Inch",
        price: 6.5,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "12 Inch",
        value: "12 Inch",
        price: 12.0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  const breadRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "White",
        value: "White",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Wheat",
        value: "Wheat",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Flatbread",
        value: "Flatbread",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  const cheeseRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "American",
        value: "American",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Pepper Jack",
        value: "Pepper Jack",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Provalone",
        value: "Provalone",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "3",
        label: "Mozzarella",
        value: "Mozzarella",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "4",
        label: "Swiss",
        value: "Swiss",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "5",
        label: "Cheddar",
        value: "Cheddar",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "6",
        label: "Feta",
        value: "Feta",
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  const [sizeId, setSizeId] = useState("0");
  const [breadId, setBreadId] = useState(0);
  const [cheeseId, setCheeseId] = useState(0);

  const [meats, setMeats] = useState([
    { id: 0, name: "Bacon", value: false, price: 1.5 },
    { id: 1, name: "Ham", value: false, price: 1.5 },
    { id: 2, name: "Turkey", value: false, price: 1.5 },
    { id: 3, name: "Steak", value: false, price: 1.5 },
    { id: 4, name: "Salami", value: false, price: 1.5 },
    { id: 5, name: "Pepperoni", value: false, price: 1.5 },
    { id: 6, name: "Roast Beef", value: false, price: 1.5 },
    { id: 7, name: "Chicken Breast", value: false, price: 1.5 },
    { id: 8, name: "Teriyaki Chicken", value: false, price: 1.5 },
    { id: 9, name: "Tuna", value: false, price: 1.5 },
    { id: 10, name: "Meatballs", value: false, price: 1.5 },
  ]);

  const [sauces, setSauces] = useState([
    { id: 0, name: "Mayonnaise", value: false },
    { id: 1, name: "Mustard", value: false },
    { id: 2, name: "Ranch", value: false },
    { id: 3, name: "Chipotle", value: false },
    { id: 4, name: "Sweet Onion", value: false },
    { id: 5, name: "Honey Mustard", value: false },
    { id: 6, name: "Oil", value: false },
    { id: 7, name: "Vinegar", value: false },
    { id: 8, name: "Hot", value: false },
    { id: 9, name: "BBQ", value: false },
    { id: 10, name: "Marinara", value: false },
  ]);

  const [vegetables, setVegetables] = useState([
    { id: 0, name: "Lettuce", value: false },
    { id: 1, name: "Tomato", value: false },
    { id: 2, name: "Cucumber", value: false },
    { id: 3, name: "Onions", value: false },
    { id: 4, name: "Bell Peppers", value: false },
    { id: 5, name: "Spinach", value: false },
    { id: 6, name: "Pickles", value: false },
    { id: 7, name: "Olives", value: false },
    { id: 8, name: "Jalapenos", value: false },
    { id: 9, name: "Banana Peppers", value: false },
  ]);

  const [doubleMeat, setDoubleMeat] = useState(false);
  const [doubleCheese, setDoubleCheese] = useState(false);
  const [toasted, setToasted] = useState(false);
  const [mealCombo, setMealCombo] = useState(false);

  function setMeatHandler(id) {
    setMeats((prevMeats) =>
      prevMeats.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  function setSauceHandler(id) {
    setSauces((prevSauces) =>
      prevSauces.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  function setVegetablesHandler(id) {
    setVegetables((prevVegetables) =>
      prevVegetables.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  function setDoubleMeatHandler() {
    setDoubleMeat((previous) => !previous);
  }

  function setDoubleCheeseHandler() {
    setDoubleCheese((previous) => !previous);
  }

  function setToastedHandler() {
    setToasted((previous) => !previous);
  }

  function setMealComboHandler() {
    setMealCombo((previous) => !previous);
  }

  function homeScreenHandler() {
    setCurrentPrice(0);
    setCurrentScreen("Home");
  }

  function orderReviewHandler() {
    let price = 0;
    for (let i = 0; i < meats.length; i++) {
      if (meats[i].value) {
        price = price + meats[i].price;
      }
    }
    if (doubleMeat) {
      price = price * 2;
    }

    if (doubleCheese) {
      price = price + 1.25;
    }
    if (mealCombo) {
      price = price + 3.75;
    }

    price = price + sizeRadioButtons[sizeId].price;

    setCurrentPrice(price);

    setCurrentScreen("review");
  }

  let screen;
  if (currentScreen === "Home") {
    screen = (
      <HomeScreen
        sizeId={sizeId}
        sizeRadioButtons={sizeRadioButtons}
        onSetSizeID={setSizeId}
        breadId={breadId}
        breadRadioButtons={breadRadioButtons}
        onSetBreadID={setBreadId}
        meats={meats}
        onSetMeats={setMeatHandler}
        sauces={sauces}
        onSetSauces={setSauceHandler}
        vegetables={vegetables}
        onSetVegetables={setVegetablesHandler}
        cheeseID={cheeseId}
        cheeseRadioButtons={cheeseRadioButtons}
        onSetCheeseId={setCheeseId}
        doubleMeat={doubleMeat}
        onSetDoubleMeat={setDoubleMeatHandler}
        doubleCheese={doubleCheese}
        onSetDoubleCheese={setDoubleCheeseHandler}
        toasted={toasted}
        onSetToasted={setToastedHandler}
        mealCombo={mealCombo}
        onSetMealCombo={setMealComboHandler}
        onNext={orderReviewHandler}
      />
    );
  }

  if (currentScreen == "review") {
    screen = <OrderReviewScreen 
    size={sizeRadioButtons[sizeId].value}
    bread={breadRadioButtons[breadId].value}
    cheese={cheeseRadioButtons[cheeseId].value}
    meats={meats}
    sauces={sauces}
    vegetables={vegetables}
    doubleMeat={doubleMeat}
    doubleCheese={doubleCheese}
    toasted={toasted}
    mealCombo={mealCombo}
    price={currentPrice}
    onNext={homeScreenHandler} 
    />;
  }
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
});
