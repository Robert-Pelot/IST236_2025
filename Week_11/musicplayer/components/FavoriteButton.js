import { Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Colors from "../constants/colors";

function FavoriteButton(props) {
  if (props.pressed) {
    return (
      <Pressable onPress={props.onPress}>
        <Entypo name="star" size={40} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={props.onPress}>
        <Entypo name="star-outlined" size={40} color={Colors.accent200} />
      </Pressable>
    );
  }
}

export default FavoriteButton;
