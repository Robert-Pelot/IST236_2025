import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Entrees: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>This is the entrees page!</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Entrees;