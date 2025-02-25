import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';

// Sample dessert items with local images
const dessertItems = [
  {
    name: 'Chocolate Lava Cake',
    description: 'A rich, warm chocolate cake with a molten center, served with vanilla ice cream and raspberry coulis.',
    image: require('../assets/images/desserts/lavacake.jpg'), // Correct local image reference
  },
  {
    name: 'Tiramisu',
    description: 'Layers of espresso-soaked ladyfingers, mascarpone cream, and a dusting of cocoa powder.',
    image: require('../assets/images/desserts/tiramisu.jpg'), // Correct local image reference
  },
  {
    name: 'Crème Brûlée',
    description: 'A creamy custard topped with a crispy, caramelized sugar crust, served with fresh berries.',
    image: require('../assets/images/desserts/cremebrulee.jpg'), // Correct local image reference
  },
  {
    name: 'Lemon Meringue Pie',
    description: 'Zesty lemon filling in a flaky crust, topped with a cloud-like meringue.',
    image: require('../assets/images/desserts/meringue.jpg'), // Correct local image reference
  },
  {
    name: 'Cheesecake with Strawberry Compote',
    description: 'Smooth cheesecake on a graham cracker crust, topped with a homemade strawberry compote.',
    image: require('../assets/images/desserts/cheesecake.jpg'), // Correct local image reference
  },
];

const Desserts: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Desserts</Text>
      <ScrollView style={styles.menuContainer}>
        {dessertItems.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuContainer: {
    width: '100%',
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
});

export default Desserts;