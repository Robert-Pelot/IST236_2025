import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';

// Sample appetizer items with local images
const appetizerItems = [
  {
    name: 'Bruschetta',
    description: 'Grilled bread topped with fresh tomatoes, basil, and a drizzle of balsamic glaze.',
    image: require('../assets/images/appetizers/bruschetta.jpg'), // Correct local image reference
  },
  {
    name: 'Stuffed Mushrooms',
    description: 'Mushrooms filled with a creamy mixture of cheese, garlic, and herbs.',
    image: require('../assets/images/appetizers/mushrooms.jpg'), // Correct local image reference
  },
  {
    name: 'Caprese Salad',
    description: 'Sliced fresh mozzarella, tomatoes, and basil with a balsamic reduction.',
    image: require('../assets/images/appetizers/salad.jpg'), // Correct local image reference
  },
  {
    name: 'Shrimp Cocktail',
    description: 'Chilled shrimp served with a tangy cocktail sauce and lemon wedges.',
    image: require('../assets/images/appetizers/shrimp.jpg'), // Correct local image reference
  },
  {
    name: 'Chicken Skewers',
    description: 'Grilled marinated chicken on skewers, served with a spicy dipping sauce.',
    image: require('../assets/images/appetizers/chicken.jpg'), // Correct local image reference
  },
];

const Appetizer: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Appetizers</Text>
      <ScrollView style={styles.menuContainer}>
        {appetizerItems.map((item, index) => (
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

export default Appetizer;