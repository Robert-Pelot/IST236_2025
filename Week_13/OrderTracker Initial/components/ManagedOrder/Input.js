import { StyleSheet, Text, View, TextInput } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input(props) {
  let inputStyles = [StyleSheet.input];

  if (props.textInputConfig && props.textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (props.invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, props.style]} >
      <Text style={[styles.label, props.invalid && styles.invalidLabel]}>
        {props.label}
      </Text>
      <TextInput style={inputStyles} {...props.textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 12,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 12,
  },
  inputMultiline: {
    textAlignVertical: "top",
    minHeight: 100,
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
