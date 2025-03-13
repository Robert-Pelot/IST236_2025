import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Pressable,
  Platform,
  Button,
  useWindowDimensions,
  Modal,
} from "react-native";
import { useState, useMemo } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";

function HomeScreen() {
  
  const insets = useSafeAreaInsets();

  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8];
  const [numGuests, setNumGuests] = useState(1);
  const [showNumGuests, setShowNumGuests] = useState(false);

  const bedCounts = [1, 2, 3, 4];
  const [numBeds, setNumBeds] = useState(1);
  const [showNumBeds, setShowNumBeds] = useState(false);

  const { width } = useWindowDimensions();

  // Memoize styles to prevent unnecessary recalculations on every render
  const dateLabelFlex = useMemo(() => ({ fontSize: width * 0.1 }), [width]);
  const dateTextFlex = useMemo(() => ({ fontSize: width * 0.05 }), [width]);

  // Picker Change Handlers
  const onChangeCheckIn = (event, selectedDate) => {
    if (selectedDate) {
      setCheckIn(selectedDate);
      setShowCheckIn(false);
    }
  };

  const onChangeCheckOut = (event, selectedDate) => {
    if (selectedDate) {
      setCheckOut(selectedDate);
      setShowCheckOut(false);
    }
  };

  const onChangeNumGuests = (itemValue) => {
    setNumGuests(itemValue);
    setShowNumGuests(false);
  };

  const onChangeNumBeds = (itemValue) => {
    setNumBeds(itemValue);
    setShowNumBeds(false);
  };

  const [results, setResults] = useState("");

  function onReserveHandler() {
    let res = `Check In:\t\t${checkIn.toDateString()}\n`;
    res = res + `Check Out:\t${checkOut.toDateString()}\n`;
    res = res + `Number of Guests:\t\t${guestCounts[numGuests - 1]}\n`;
    res = res + `Number of Beds:\t\t${bedCounts[numBeds - 1]}\n`;
    setResults(res);
  }

  // Show and Hide Functions
  const showCheckInPicker = () => setShowCheckIn(true);
  const showCheckOutPicker = () => setShowCheckOut(true);
  const showNumGuestsPicker = () => setShowNumGuests(true);
  const showNumBedsPicker = () => setShowNumBeds(true);

  return (
    <ImageBackground
      source={require("../assets/images/italy.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingRight: insets.right,
            paddingLeft: insets.left,
          },
        ]}
      >
        {/* Title of Resort */}
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.titleContainer}>
            <Title>Riviera Retreat</Title>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check In</Text>
              <Pressable onPress={showCheckInPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out</Text>
              <Pressable onPress={showCheckOutPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Check-In and Check-Out Date Pickers */}
          {showCheckIn && (
            <DateTimePicker
              testID="dateTimePickerCheckIn"
              value={checkIn}
              mode={"date"}
              display="spinner"
              onChange={onChangeCheckIn}
            />
          )}

          {showCheckOut && (
            <DateTimePicker
              testID="dateTimePickerCheckOut"
              value={checkOut}
              mode={"date"}
              display="spinner"
              onChange={onChangeCheckOut}
            />
          )}

          {/* Guests Picker */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Guests
            </Text>
            <Pressable onPress={showNumGuestsPicker}>
              <Text style={[styles.dateText, dateTextFlex]}>
                {guestCounts[numGuests - 1]} Guests
              </Text>
            </Pressable>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={showNumGuests}
          >
            <View style={styles.centeredModalView}>
              <View style={styles.modalView}>
                <Text>Enter Number of Guests:</Text>
                <Picker
                  selectedValue={guestCounts[numGuests - 1]}
                  onValueChange={onChangeNumGuests}
                  style={{ height: 200, width: 200 }}
                >
                  {guestCounts.map((count, index) => (
                    <Picker.Item
                      label={count.toString()}
                      value={count}
                      key={index}
                    />
                  ))}
                </Picker>
                <Button
                  title="Confirm"
                  onPress={() => setShowNumGuests(false)}
                />
              </View>
            </View>
          </Modal>

          {/* Beds Picker */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Beds
            </Text>
            <Pressable onPress={showNumBedsPicker}>
              <Text style={[styles.dateText, dateTextFlex]}>
                {bedCounts[numBeds - 1]} Beds
              </Text>
            </Pressable>
          </View>

          <Modal animationType="slide" transparent={true} visible={showNumBeds}>
            <View style={styles.centeredModalView}>
              <View style={styles.modalView}>
                <Text>Enter Number of Beds:</Text>
                <Picker
                  selectedValue={bedCounts[numBeds - 1]}
                  onValueChange={onChangeNumBeds}
                  style={{ height: 200, width: 200 }}
                >
                  {bedCounts.map((count, index) => (
                    <Picker.Item
                      label={count.toString()}
                      value={count}
                      key={index}
                    />
                  ))}
                </Picker>
                <Button title="Confirm" onPress={() => setShowNumBeds(false)} />
              </View>
            </View>
          </Modal>

          <View style={styles.buttonContainer}>
            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
          </View>
          <View style={styles.resultsContainer}>
            <Text style={styles.results}>{results}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.3,
  },
  scrollContainer: {
    width: "100%",
  },
  titleContainer: {
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary300,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
  },
  dateContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
  },
  dateLabel: {
    fontSize: 50,
    color: Colors.primary500,
    fontFamily: "hotel",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  dateText: {
    color: Colors.primary800,
    fontSize: 20,
    fontWeight: "bold",
  },
  centeredModalView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    alignItems: "center",
  },
  resultsContainer: {
    marginTop: 20,
    justifyContent: "flex-start",
  },
  resultRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  resultLabel: {
    fontWeight: "bold",
  },
  results: {
    textAlign: "center",
    color: Colors.primary500,
    // fontFamily: "hotel",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontSize: 30,
    marginBottom: 60,
  },
});
