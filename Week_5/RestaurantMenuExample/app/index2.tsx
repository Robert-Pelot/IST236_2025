import React from 'react';
import { SafeAreaView } from 'react-native';
import MenuScreen from './MenuScreen'; // Adjust the path if necessary

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MenuScreen />
    </SafeAreaView>
  );
};

export default App;