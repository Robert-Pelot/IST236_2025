// This may or may not be complete - I just wanted notes
// from the newest video the professor posted:

// how to use an input - to determine an output - 
// using an If else statement

import { Text, View, Image, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import Button from "../components/button";

export default function Index() {
  const [showAppInfo, setShowAppInfo] = useState<boolean>(false);

  const [enterText, setText] = useState("");

  var finalText = "Nothing Entered"
  if (enterText == "5") {
    finalText = "You entered 5"
  } else {
    finalText = "You entered not 5"
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {showAppInfo ? (
        <View style={styles.optionsRow}>
          <Text>This is my output {finalText}</Text>
        </View>
      ) : (
        <View>
          <TextInput
            value={enterText}
            onChangeText={setText}
            placeholder="Enter Text Here"
          />
          <Button
            label="Enter your choice: "
            onPress={() => setShowAppInfo(true)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  optionsRow: {},
});
