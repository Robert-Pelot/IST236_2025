import React from 'react';
import { SafeAreaView } from 'react-native';

//import QuadrantScreen from './QuadrantScreen';
import HalfScreenLayout from './HalfScreenLayout' ;
import MenuScreen from './MenuScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    
	<HalfScreenLayout />

    </SafeAreaView>
  );
};

export default App;