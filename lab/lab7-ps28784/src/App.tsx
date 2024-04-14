import React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// @ts-ignore
import Bai1 from './lab7/bai1.tsx';
import Bai2 from './lab7/bai2.tsx';
import Bai3 from './lab7/bai3.tsx';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bai1" component={Bai1} />
        <Stack.Screen name="Bai2" component={Bai2} />
        <Stack.Screen name="Bai3" component={Bai3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// @ts-ignore
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Bài 1" onPress={() => navigation.navigate('Bai1')} />
      <Button title="Bài 2" onPress={() => navigation.navigate('Bai2')} />
      <Button title="Bài 3" onPress={() => navigation.navigate('Bai3')} />
    </View>
  );
}

export default App;
