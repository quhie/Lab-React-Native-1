import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Bai3 = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const buy = () => {};

  return (
    <ImageBackground
      source={{
        uri: 'https://kienviet.net/wp-content/uploads/2020/12/Picture1.png',

      }}
      style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          {/*back button*/}
          <TouchableOpacity onPress={handleBackPress}>
            <Image
              style={styles.iconBack}
              source={{
                uri: 'https://img.icons8.com/ios/452/back--v1.png',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.iconMenu}
              source={{
                uri: 'https://img.icons8.com/ios/452/menu--v1.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.textHeader}>PHỐ CỔ HỘI AN</Text>
          {/*rating*/}
          <View style={styles.rating}>
            <Text style={{fontSize: 20, color: 'yellow'}}>⭐️</Text>
            <Text style={{fontSize: 20, color: 'white'}}>5.0</Text>
          </View>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.box2Content}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.iconBox2}
              source={{
                uri: 'https://img.icons8.com/ios/50/000000/address--v1.png',
              }}
            />
            <Text style={styles.textBox2}>Quảng Nam</Text>
          </View>
          <Text style={styles.textInfBox2}>Thông tin chuyến đi</Text>
          <Text
            style={styles.textInfBox3}
            numberOfLines={7}
            ellipsizeMode="tail">
            Du lịch phố cổ Hội An, bạn không chỉ được khám phá những giá trị văn
            hóa qua những kiến trúc hoài cổ, những hoạt động nghệ thuật dân gian
            hay những cảnh sắc thiên nhiên thơ mộng mà còn có cơ hội thưởng thức
            những món ăn đặc sản “hài lòng khách đến, vừa lòng khách đi”. Bỏ túi
            ngay từ A - Z các điểm đến, ăn ở, đi lại và kinh nghiệm du lịch phố
            cổ Hội An đầy đủ nhất chuyến đi của bạn được thuận lợi và trọn vẹn!
          </Text>
        </View>
      </View>
      <View style={styles.box3}>
        <Text style={styles.tvPrice}>100$/ Ngày</Text>
        <TouchableOpacity style={styles.customBuy} onPress={buy}>
          <Text style={styles.buttonBuy}>Đăng ngay</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.heartContainer}>
        <Text style={styles.heartIcon}>❤️</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  box2: {
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  box2Content: {
    flexDirection: 'column',
    marginStart: 12,
  },
  textHeader: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginStart: 12,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 12,
  },

  text: {
    fontSize: 20,
    color: 'white',
  },
  textBox2: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    color: '#00D9FF',
  },
  textInfBox2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  textInfBox3: {
    fontSize: 18,
    color: '#8e8e8f',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  iconBox2: {
    width: 22,
    height: 22,
    marginTop: 20,
    marginLeft: 20,
    tintColor: '#00D9FF',
  },
  iconBack: {
    width: 22,
    height: 22,
    marginTop: 50,
  },
  iconMenu: {
    width: 22,
    height: 22,
    marginTop: 50,
  },
  box3: {
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#334ffb',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },

  customBuy: {
    marginTop: 20,
    height: 50,
    width: '50%',
    borderColor: '#ec1212',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00ffff',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    alignSelf: 'flex-start',
    marginStart: 30,
  },

  buttonBuy: {
    color: '#334ffb',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tvPrice: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginStart: 12,
  },
  heartContainer: {
    position: 'absolute',
    bottom: 330,
    right: 25,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
  },
  heartIcon: {
    fontSize: 30,
  },
});
export default Bai3;
