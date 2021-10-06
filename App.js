import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Points from './src/screens/Points';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Points />
    </SafeAreaView>
  );
};

export default App;
