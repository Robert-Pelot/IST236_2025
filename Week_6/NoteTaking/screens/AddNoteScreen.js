import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import { useState } from "react";

function AddNoteScreen(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  const [noteTitle, setNoteTitle ] = useState("");
  const [noteText, setNoteText ] = useState("");

  function addNoteHandler(){
    props.onAdd(noteTitle, noteText);
    props.onCancel();
  }

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Add New Notes</Title>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.noteTitleContainer}>
            <TextInput
              placeholder="Enter Note Title Here"
              style={styles.noteTitle}
              onChangeText={setNoteTitle}
            />
          </View>

          <View style={styles.noteTextContainer}>
            <TextInput
              placeholder="Enter Note Text Here"
              style={styles.noteText}
              onChangeText={setNoteText}
              textAlignVertical="top"
              multiline
            />
          </View>

          <View style={styles.navButtonContainer}>
            <View style={styles.navButton}>
              <NavButton onNext={addNoteHandler}>Submit</NavButton>
            </View>
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default AddNoteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 50,
  },
  scrollContainer: {
    flex: 5,
  },
  noteTitleContainer: {
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  noteTitle: {
    color: Colors.accent800,
    fontWeight: "bold",
    fontSize: 30,
    padding: 10,
  },
  noteTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  noteText: {
    color: Colors.primary800,
    padding: 10,
  },
    navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  }
});
