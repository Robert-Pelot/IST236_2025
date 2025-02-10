// this is the newest version based on a new video posted
// by the professor this actual semester.
// previous versions were based on old videos that were outdated.
// this one is much - much - simpler - as you can see. 
// I like the other one better - but this one was quite easy.
import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Your Name.</Text>
      <Text>Your Address</Text>
      <Text>Your Phone</Text>
      <Image
        source={require('@/assets/images/selfportrait.jpg')}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
}
