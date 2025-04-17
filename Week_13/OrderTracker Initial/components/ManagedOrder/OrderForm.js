import { StyleSheet, View, Text, ImageBackgroundComponent } from "react-native";
import Input from "../ManagedOrder/Input";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";
import { useState } from "react";
import Button from "../UI/Button";

function OrderForm(props) {
  const [inputs, setInputs] = useState({
    total: {
      value: props.defaultValues ? props.defaultValues.total.toString() : "",
      isValid: true,
    },
    date: {
      value: props.defaultValues
        ? getFormattedDate(props.defaultValues.date)
        : "",
      isValid: true,
    },
    description: {
      value: props.defaultValues ? props.defaultValues.description : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const orderData = {
      total: +inputs.total.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const totalIsValid = !isNaN(orderData.total) && orderData.total > 0;
    const dateIsValid = orderData.date.toString() !== "Invalid Date";
    const descriptionIsValid = orderData.description.trim().length > 0;

    if (!totalIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((currentInputs) => {
        return {
          total: { value: currentInputs.total.value, isValid: totalIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          description: {
            value: currentInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
    } else {
      // Pass orderData to the parent screen (ManageOrderScreen)
      props.onSubmit(orderData); // <-- This is where the data is passed to the parent screen
    }
  }

  const formIsInvalid =
    !inputs.total.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Order Details:</Text>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs.description.value,
          style: {
            backgroundColor: "#f0f0f0",
          },
        }}
      />
      <View style={styles.rowContainer}>
        <Input
          style={styles.rowItem}
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            keyboardType: "decimal-pad",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
            style: {
              backgroundColor: "#f0f0f0",
            },
          }}
        />
        <Input
          style={styles.rowItem}
          label="Total"
          invalid={!inputs.total.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "total"),
            value: inputs.total.value,
            style: {
              backgroundColor: "#f0f0f0",
            },
          }}
        />
      </View>
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input valudes - please check inputs
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <Button mode="flat" onPress={props.onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {props.submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default OrderForm;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  rowContainer: {
    flexDirection: "row",
  },
  rowItem: {
    flex: 1,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error50,
    margin: 8,
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
