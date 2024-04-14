import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const handleLogin = () => {
};

const Bai2 = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://thumbs.dreamstime.com/z/dog-dawn-cute-small-jack-russell-terrier-front-beautiful-colored-sunset-sunrise-poppy-field-dog-dawn-cute-293494929.jpg?ct=jpeg',
        }}
        resizeMode="cover">
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.container}>
          <Text style={styles.text}>Discover word with us</Text>
          <Text style={styles.text2}>Discover word with us, Discover word with us, Discover word with us  </Text>

          <TouchableOpacity style={styles.customButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 0,
  },
  container: {
    flex: 1,
    marginTop: 0,
    justifyContent: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    width: 180,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'flex-start',
    marginStart: 30,
  },
  text2: {
    color: 'white',
    fontSize: 20,
    width: 350,
    alignSelf: 'flex-start',
    marginStart: 30,
    fontWeight: '200',
    textAlign: 'center',
  },

  customButton: {
    marginTop: 100,
    height: 50,
    width: '50%',
    borderColor: '#ec1212',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ff0000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    alignSelf: 'flex-start',
    marginStart: 30,
  },
  buttonText: {
    color: '#ff0000',
    fontSize: 16,
    fontStyle: 'normal',
  },
});

export default Bai2;
