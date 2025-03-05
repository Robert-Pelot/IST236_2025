import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title(props){
    return <Text style={styles.title} numberOfLines={1}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: "center",
        color: Colors.primary500,
    }
})