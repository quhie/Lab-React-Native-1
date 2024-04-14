import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Bai1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Đây là một quá trình khá đơn giản, vì chúng ta có which nguồn khác nhau
        để tải các phông chữ trên Internet. Google Fonts là một ví dụ điển hình
        về một nguồn tài nguyên phổ biến của phông chữ mã nguồn mở và miễn phí.
        Bạn có thể xem và tải xuống bất kỳ phông chữ nào bạn thích ở định dạng
        .ttf.
      </Text>

      <Text style={styles.text2}>
        Đây là một quá trình khá đơn giản, vì chúng ta có which nguồn khác nhau
        để tải các phông chữ trên Internet. Google Fonts là một ví dụ điển hình
        về một nguồn tài nguyên phổ biến của phông chữ mã nguồn mở và miễn phí.
        Bạn có thể xem và tải xuống bất kỳ phông chữ nào bạn thích ở định dạng
        .ttf.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'RubikGlitch-Regular',
  },
  text2: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
  },
});

export default Bai1;
