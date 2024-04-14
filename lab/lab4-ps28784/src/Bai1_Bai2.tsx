// Bai1_Bai2.tsx
// @ts-ignore
import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput} from 'react-native';

const colorText = (color: string) => ({color});
const sizeText = (size: number) => ({fontSize: size});

const styleText = (style: object) => style;

const Bai1_Bai2 = () => {
  return (
    <SafeAreaView>
      <View style={styles.container2}>
        <TextInput style={styles.input} placeholder="Nhập họ tên" />
        <TextInput style={styles.input} placeholder="Nhập số điện thoại" />
        <TextInput style={styles.input} placeholder="Nhập mật khẩu" />
      </View>

      <View style={styles.container}>
        <Text style={styles.baseText}>
          Em vào đời bằng{' '}
          <Text style={[styles.boldText, colorText('red')]}>vang đỏ</Text> anh
          vào đời bằng{' '}
          <Text style={[styles.boldText, colorText('yellow')]}>nước trà</Text>
        </Text>
        <Text style={styles.baseText}>
          Bằng cơn mưa thơm{' '}
          <Text style={[styles.boldText, sizeText(20), styles.italicText]}>
            mùi đất
          </Text>{' '}
          và{' '}
          <Text style={[sizeText(10), styles.italicText]}>
            bằng hoa dại mọc trước nhà
          </Text>
        </Text>
        <Text
          style={[
            styles.baseText,
            styles.italicText,
            styles.boldText,
            colorText('gray'),
          ]}>
          Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
        </Text>
        <Text style={styles.baseText}>
          Lý trí em là{' '}
          <Text
            style={styleText({
              textDecorationLine: 'underline',
              letterSpacing: 20,
              fontWeight: 'bold',
            })}>
            {' '}
            công cụ{' '}
          </Text>
          còn trái tim anh là
          <Text
            style={styleText({
              textDecorationLine: 'underline',
              letterSpacing: 20,
              fontWeight: 'bold',
            })}>
            {' '}
            động cơ{' '}
          </Text>
        </Text>
        <Text style={[styles.baseText, styleText({textAlign: 'right'})]}>
          Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
        </Text>
        <Text
          style={[
            styles.baseText,
            styleText({
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'orange',
            }),
          ]}>
          Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
        </Text>
        <Text
          style={[
            styles.baseText,
            styleText({
              fontWeight: 'bold',
              color: 'black',
            }),
          ]}>
          Em vào đời bằng <Text style={colorText('white')}>mây trắng</Text> em
          vào đời bằng <Text style={colorText('yellow')}>nắng xanh</Text>
        </Text>
        <Text
          style={[
            styles.baseText,
            styleText({
              fontWeight: 'bold',
              color: 'black',
            }),
          ]}>
          Em vào đời bằng <Text style={colorText('yellow')}>đại lộ</Text> và con
          con đường đó giờ <Text style={colorText('white')}>vắng anh</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 15,
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  },

  container2: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 15,
  },
  input: {
    height: 50,
    margin: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
  },
});

export default Bai1_Bai2;
