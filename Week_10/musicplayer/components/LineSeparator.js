import { View } from "react-native";
import Colors from "../constants/colors";

function LineSeparator() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          height: 3,
          backgroundColor: Colors.accent200,
          marginVertical: 10,
        }}
      />
    </View>
  );
}

export default LineSeparator;
