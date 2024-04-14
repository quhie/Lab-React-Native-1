import React, {FC, useState} from 'react';
import {StyleSheet, Text, TextInput, Button, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Details: {name: string};
};
const HomeScreen: FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = ({
  navigation,
}) => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Màn hình chính</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Nhập tên"
        onChangeText={setName}
      />
      <Button
        title="Đi tới màn hình chi tiết"
        onPress={() => {
          navigation.navigate('Details', {name: name});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    width: 200,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default HomeScreen;
