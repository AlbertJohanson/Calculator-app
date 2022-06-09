import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCal} from '../components/ButtonCal';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

type Props = {};

const CalculatorScreen = (props: Props) => {
  const {
    number,
    beforeNumber,
    handleClean,
    buildNumber,
    deleteLastNumber,
    positiveNegative,
    handleDIV,
    handleMUL,
    handleSUB,
    handleADD,
    handleResult,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {beforeNumber !== '0' && (
        <Text style={styles.smallResult}>{beforeNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit={true}>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCal value="C" color="#a5a5a5" action={handleClean} />
        <ButtonCal value="+/-" color="#a5a5a5" action={positiveNegative} />
        <ButtonCal value="del" color="#a5a5a5" action={deleteLastNumber} />
        <ButtonCal value="÷" color="#fea00a" action={handleDIV} />
      </View>

      <View style={styles.row}>
        <ButtonCal value="7" action={buildNumber} />
        <ButtonCal value="8" action={buildNumber} />
        <ButtonCal value="9" action={buildNumber} />
        <ButtonCal value="x" color="#fea00a" action={handleMUL} />
      </View>

      <View style={styles.row}>
        <ButtonCal value="4" action={buildNumber} />
        <ButtonCal value="5" action={buildNumber} />
        <ButtonCal value="6" action={buildNumber} />
        <ButtonCal value="-" color="#fea00a" action={handleSUB} />
      </View>

      <View style={styles.row}>
        <ButtonCal value="1" action={buildNumber} />
        <ButtonCal value="2" action={buildNumber} />
        <ButtonCal value="3" action={buildNumber} />
        <ButtonCal value="+" color="#fea00a" action={handleADD} />
      </View>

      <View style={styles.row}>
        <ButtonCal value="0" width={180} action={buildNumber} />
        <ButtonCal value="." action={buildNumber} />
        <ButtonCal value="=" color="#fea00a" action={handleResult} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
