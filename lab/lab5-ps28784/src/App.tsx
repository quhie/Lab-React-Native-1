import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Bai1 from './bai1.tsx';
import Bai2 from './bai2.tsx';
import Bai3 from './bai3.tsx';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bài 1" component={Bai1} />
        <Stack.Screen
          name="Bài 2"
          component={Bai2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bài 3"
          component={Bai3}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Bài 1')}>
          <Text style={styles.buttonText}>Bài 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Bài 2')}>
          <Text style={styles.buttonText}>Bài 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Bài 3')}>
          <Text style={styles.buttonText}>Bài 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100,
  },
  button: {
    backgroundColor: '#51bd5b',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
