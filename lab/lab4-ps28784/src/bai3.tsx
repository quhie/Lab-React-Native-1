// bai3.tsx
// @ts-ignore
import React, {useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Modal,
  Text,
  Alert,
  BackHandler,
  Image,
} from 'react-native';

const Bai3 = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleBackButtonClick = () => {
    Alert.alert('Bạn đã tắt modal bằng nút back của thiết bị');
    setModalVisible(false);
    return true;
  };

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Mở Modal"
          color="#FFFFFF"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleBackButtonClick}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Image
              style={{
                height: 100,
                width: 100,
              }}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Button
              title="Ẩn Modal"
              color="#FF0000"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
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
    width: 200,
    elevation: 8,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Bai3;
