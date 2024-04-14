// File: Screen2.tsx
import React from 'react';
import {View, Text} from 'react-native';

function Screen2() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={
        {
          fontSize: 30,
          fontWeight: 'bold',
          color: 'red',
        }}>
        Search
      </Text>
    </View>
  );
}

export default Screen2;
