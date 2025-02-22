import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';

// Sample entrée items
const entreeItems = [
  {
    name: 'Grilled Ribeye Steak',
    description: 'Served with garlic mashed potatoes and steamed asparagus.',
    image: require('../assets/images/Entrees/RibEye.jpg'), // Replace with actual image URL
  },
  {
    name: 'Pan-Seared Salmon',
    description: 'Accompanied by wild rice and sautéed spinach.',
    image: require('../assets/images/Entrees/Salmon.jpg'), 
  },
  {
    name: 'Chicken Alfredo',
    description: 'Creamy fettuccine pasta with grilled chicken breast.',
    image: require('../assets/images/Entrees/ChickenAlfredo.jpg'), // Replace with actual image URL
  },
  {
    name: 'Eggplant Parmesan',
    description: 'Layers of breaded eggplant, marinara sauce, and melted mozzarella.',
    image: require('../assets/images/Entrees/Eggplant.jpg'), // Replace with actual image URL
  },
  {
    name: 'Shrimp Scampi',
    description: 'Shrimp in a lemon-garlic butter sauce served over linguine.',
    image: require('../assets/images/Entrees/Shrimp.jpg'), // Replace with actual image URL
  },
  {
    name: 'Vegetarian Stuffed Bell Peppers',
    description: 'Quinoa, beans, and vegetables, topped with melted cheese.',
    image: require('../assets/images/Entrees/Eggplant.jpg'), // Replace with actual image URL
  },
  {
    name: 'Lamb Chops',
    description: 'Herb-crusted with mint yogurt sauce and roasted potatoes.',
    image: require('../assets/images/Entrees/lambchops.jpg'), // Replace with actual image URL
  },
];

const Entrees: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Entrees</Text>
      <ScrollView style={styles.menuContainer}>
        {entreeItems.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            {/* Correct Image Rendering */}
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

export default Entrees;