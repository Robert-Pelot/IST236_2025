import { Text, View, StyleSheet, ScrollView, Switch } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { RadioGroup } from "react-native-radio-buttons-group";
import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

function HomeScreen(props) {
  const insets = useSafeAreaInsets();

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
        <Title>Mikes Bike Shop!</Title>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.radioContainer}>
          <Text style={styles.radioHeader}> Repair Time: </Text>
          <RadioGroup
            radioButtons={props.repairTimeRadioButtons}
            onPress={(updatedRadioButtons) => {
              props.onSetRepairTimeID(updatedRadioButtons);
            }}
            selectedId={props.repairTimeId}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabels}
          />
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.checkBoxContainer}>
            <Text style={styles.checkBoxHeader}>Services: </Text>
            <View style={styles.checkBoxSubContainer}>
              {props.services.map((item) => {
                return (
                  <BouncyCheckbox
                    key={item.id}
                    text={item.name}
                    onPress={() => {
                      const updatedServices = [...props.services];
                      updatedServices[item.id].value =
                        !updatedServices[item.id].value;
                      props.onSetServices(updatedServices);
                    }}
                    textStyle={{
                      textDecorationLine: "none",
                      color: Colors.primary500,
                    }}
                    innerIconStyle={{
                      borderRadius: 0,
                      borderColor: Colors.primary500,
                    }}
                    iconStyle={{
                      borderRadius: 0,
                    }}
                    fillColor={Colors.primary500}
                    style={{
                      padding: 2,
                    }}
                  />
                );
              })}
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Submit Order</NavButton>
        </View>

        {/* Add Ons Section */}
        <View style={styles.addOnsContainer}>
          <View style={styles.addOnsSubContainer}>
            <Text style={styles.addOnsLabel}>Join Newsletter</Text>
            <Switch
              onValueChange={props.onSetJoinNewsletter}
              value={props.joinNewsletter}
              thumbColor={
                props.joinNewsletter ? Colors.primary500 : Colors.primary800
              }
              trackColor={{
                false: Colors.primary500,
                true: Colors.primary800,
              }}
            />
          </View>
          <View style={styles.addOnsSubContainer}>
            <Text style={styles.addOnsLabel}>Rental Membership</Text>
            <Switch
              onValueChange={props.onSetRentalMembership}
              value={props.rentalMembership}
              thumbColor={
                props.rentalMembership ? Colors.primary500 : Colors.primary800
              }
              trackColor={{
                false: Colors.primary500,
                true: Colors.primary800,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "biker",
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary500,
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabels: {
    fontSize: 15,
    color: Colors.primary500,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {},
  checkBoxHeader: {
    fontSize: 20,
    width: 180,
    color: Colors.primary500,
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  buttonContainer: {
    alignItems: "center",
  },
  addOnsContainer: {
    marginTop: 20, // Add margin to separate from other sections
    paddingHorizontal: 10,
  },
  addOnsSubContainer: {
    marginBottom: 10,
  },
  addOnsLabel: {
    fontSize: 18,
    color: Colors.primary500,
  },
});
