import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';
import { useRouter, Link } from 'expo-router';


function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

const App: React.FC = () => {
const router =useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.textWithLineHeight}>
        This is text with a specific line height. The space between the lines is controlled by the lineHeight property.
      </Text>
      <Text>Welcome to my app</Text>
     <View style={styles.divider} />

<Button title="Click Me" onPress={() => alert('Button Clicked!')} />
 <View style={styles.divider} />
<Button title="Appetizer" onPress={() => router.push('/appetizer')} />
 <View style={styles.divider} />
<Button title="Main Course" onPress={() => router.push('/entrees')} />
 <View style={styles.divider} />
<Button title="Mousse" onPress={() => router.push('/mousse')} />
 <View style={styles.divider} />
<Button title="Dessert" onPress={() => router.push('/dessert')} />
 <View style={styles.divider} />

 <View style={styles.container}>
    <MyButton />
  { /* Other components here */}
  </View>

      <Link href="/about">About</Link>
     
      <Link href="/user/bacon">View user</Link>
<View style={styles.divider} />
      <Text>TY for visiting my app</Text>
      

         <Text style={styles.defaultText}>
        This is text with the default line height. Notice the difference in spacing compared to the text above.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  textWithLineHeight: {
    fontSize: 16,
    lineHeight: 24, // Adjust this value to change the vertical spacing
    marginBottom: 10,
  },
  defaultText: {
    fontSize: 16,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});


export default App;
