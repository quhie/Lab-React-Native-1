// File: Screen1.tsx
import React from 'react';
import {View, Text} from 'react-native';

function Screen1() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={
        {
          fontSize: 30,
          fontWeight: 'bold',
          color: 'red',
        }}>
        Home
      </Text>
    </View>
  );
}

export default Screen1;
