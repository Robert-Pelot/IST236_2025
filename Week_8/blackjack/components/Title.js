import { Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";


function Title(props){
    const { width, height } = useWindowDimensions();

    let size = width * 0.2

    if (width > height) {
        size = height * 0.13
    }

    return <Text style={[styles.title, {fontSize: size}]}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: "poker",
        textAlign: "center",
        color: Colors.primary500,
    }
})