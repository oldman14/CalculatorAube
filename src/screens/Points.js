import React, {useCallback, useMemo, useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Animated,
} from 'react-native';
import {SIZES} from '../../constants';
import BtnCalculator from '../components/BtnCalculator';
import {COLORS} from '../constants';
const calculator = [
  [
    {color: COLORS.btnAC, value: 'AC'},
    {color: COLORS.btnAC, value: '+-'},
    {color: COLORS.btnAC, value: '%'},
    {color: COLORS.btnFc, value: '/'},
  ],
  [
    {color: COLORS.btnNum, value: '7'},
    {color: COLORS.btnNum, value: '8'},
    {color: COLORS.btnNum, value: '9'},
    {color: COLORS.btnFc, value: '*'},
  ],
  [
    {color: COLORS.btnNum, value: '4'},
    {color: COLORS.btnNum, value: '5'},
    {color: COLORS.btnNum, value: '6'},
    {color: COLORS.btnFc, value: '-'},
  ],
  [
    {color: COLORS.btnNum, value: '1'},
    {color: COLORS.btnNum, value: '2'},
    {color: COLORS.btnNum, value: '3'},
    {color: COLORS.btnFc, value: '+'},
  ],
  [
    {color: COLORS.btnNum, value: '0'},
    {color: COLORS.btnNum, value: ','},
    {color: COLORS.btnFc, value: '='},
  ],
];

const Points = () => {
  const [numCal, setNumCal] = useState(0);
  const [listNum, setListNum] = useState([]);
  const [finalNum, setFinalNum] = useState(0);
  const result = listNum.reduce((pre, cur) => {
    return pre + cur;
  }, '');
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text
          style={{
            color: '#fff',
            alignSelf: 'flex-end',
            fontSize: 50,
          }}>
          {Number(numCal) === 0 ? result : result + numCal}
          {/* {result + numCal} */}
        </Text>
      </View>
      {calculator.map((listRows, index) => {
        console.log(listRows.length);
        const RenderItem = listRows.map((itemRows, index) => {
          return (
            <BtnCalculator
              key={index}
              data={itemRows}
              setNumCal={setNumCal}
              numCal={numCal}
              listNum={listNum}
              setListNum={setListNum}
            />
          );
        });
        return <View style={styles.btnRowsContainer}>{RenderItem}</View>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btnRowsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Points;
