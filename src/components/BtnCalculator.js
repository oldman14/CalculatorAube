import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SIZES, COLORS} from '../../constants';

let SPACING = 15;
const BtnCalculator = ({data, setNumCal, numCal, setListNum, listNum}) => {
  const {color, value} = data;

  const handleCal = () => {
    // console.log(value);
    switch (value) {
      case 'AC':
        setNumCal(0);
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        setNumCal(Number(numCal) === 0 ? value : Number(numCal) + value);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        setListNum([...listNum, numCal]);
        break;
      // case '=':
      //     arr.reduce((pre, cur) => {
      //         return pre + cur;
      //       }, '');
      default:
        break;
    }
  };
  console.log('log num', listNum);
  const width =
    Number(value) === 0 ? SIZES.width / 2 - SPACING : SIZES.width / 4 - SPACING;
  return (
    <View>
      <TouchableOpacity
        onPress={handleCal}
        style={[
          styles.btnContainer,
          {
            backgroundColor: color,
            width,
          },
        ]}>
        <Text style={styles.text}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.btnFc,
    height: SIZES.width / 4 - 15,
    borderRadius: 50,
    margin: 5,
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '500',
  },
});
