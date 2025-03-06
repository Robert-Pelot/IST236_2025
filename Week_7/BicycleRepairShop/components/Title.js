import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { useFonts } from "expo-font";

function Title(props){
    return <Text style={styles.title} numberOfLines={1}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontFamily: "biker",
        textAlign: "center",
        color: Colors.primary500,
    }
})