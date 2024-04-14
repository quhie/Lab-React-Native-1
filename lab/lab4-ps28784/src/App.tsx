// App.tsx
// @ts-ignore
import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Bai1_Bai2 from './Bai1_Bai2';
import bai3 from './bai3';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bài 1, Bài 2" component={Bai1_Bai2} />
        <Stack.Screen name="Bài 3" component={bai3} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Bài 1 và Bài 2"
          color="#FFFFFF"
          onPress={() => navigation.navigate('Bài 1, Bài 2')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Bài 3"
          color="#FFFFFF"
          onPress={() => navigation.navigate('Bài 3')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: '#51bd5b',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
});

export default App;
