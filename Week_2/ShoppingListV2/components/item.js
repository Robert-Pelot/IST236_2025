import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Modal,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";



function Item(props){
    return (
        <View style={styles.item}>
            <Pressable
                // add the android ripple
                android_ripple={{ color: "#B180F0" }}
                // style the button when pressed
                style={({ pressed }) => pressed && styles.pressedButton}
                // when pressed, open modal screen    
                onPress={props.onDeleteItem.bind(this, props.id)}
            >
                <Text style={styles.itemText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default Item;

const styles = StyleSheet.create({
    item: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "lightpink",
        width: 300,
        alignItems: "center",
    },
    pressedItem: {
        opacity: 0.5,

    },
    itemText: {
        color: "blue",
        padding: 8,

    },

})