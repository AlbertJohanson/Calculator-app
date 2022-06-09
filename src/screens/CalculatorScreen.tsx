import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCal} from '../components/ButtonCal';
import {styles} from '../theme/appTheme';

type Props = {};

const CalculatorScreen = (props: Props) => {
  const [number, setNumber] = useState('0');
  const [beforeNumber, setBeforeNumber] = useState('0');

  const handleClean = () => {
    setNumber('0');
  };

  const buildNumber = (numberText: string) => {
    if (number.includes('.') && numberText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //Decimal point
      if (numberText === '.') {
        setNumber(number + numberText);

        //Check if is another 0 and has a point
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);

        //Check if is different from 0 and doesn't have a point
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);

        //Avoid 0.0000
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };


  const deleteLastNumber = () => {
      if (number.length > 1) {
          setNumber(number.slice(0, -1))
      } else {
            setNumber('0')
      }
  }

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const handleOperation = (operation: string) => {};

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{beforeNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit={true}>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCal value="C" color="#a5a5a5" action={handleClean} />
        <ButtonCal value="+/-" color="#a5a5a5" action={positiveNegative} />
        <ButtonCal value="del" color="#a5a5a5" action={deleteLastNumber} />
        <ButtonCal value="÷" color="#fea00a" action={handleOperation} />
      </View>

      <View style={styles.row}>
        <ButtonCal value="7" action={buildNumber} />
        <ButtonCal value="8" action={buildNumber} />
        <ButtonCal value="9" action={buildNumber} />
        <ButtonCal value="x" color="#fea00a" action={buildNumber} />
      </View>

      <View style={styles.row}>
        <ButtonCal value="4" action={buildNumber} />
        <ButtonCal value="5" action={buildNumber} />
        <ButtonCal value="6" action={buildNumber} />
        <ButtonCal value="-" color="#fea00a" action={handleOperation} />
      </View>

      <View style={styles.row}>
        <ButtonCal value="1" action={buildNumber} />
        <ButtonCal value="2" action={buildNumber} />
        <ButtonCal value="3" action={buildNumber} />
        <ButtonCal value="+" color="#fea00a" action={handleOperation} />
      </View>

      <View style={styles.row}>
        <ButtonCal value="0" width={180} action={buildNumber} />
        <ButtonCal value="." action={buildNumber} />
        <ButtonCal value="=" color="#fea00a" action={handleOperation} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
