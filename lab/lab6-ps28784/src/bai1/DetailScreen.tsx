import React, {FC} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Details: {name: string};
};

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Màn hình chi tiết</Text>

      <Button
        title="Quay lại màn hình chính (goBack)"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Quay lại màn hình chính (reset)"
        onPress={() => navigation.reset({index: 0, routes: [{name: 'Home'}]})}
      />
      <Button
        title="Quay lại màn hình chính (pop)"
        onPress={() => navigation.pop()}
      />
      <Button
        title="Quay lại màn hình chính (popToTop)"
        onPress={() => navigation.popToTop()}
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
});

export default DetailsScreen;
