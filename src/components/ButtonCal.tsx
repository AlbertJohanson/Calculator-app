import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


type Props = {
  value: string;
  color?: string;
  width?: number;
  action: (numberText:string) => void;
};

export const ButtonCal = ({value, color = '#333333', width, action}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        ...styles.button,
        backgroundColor: color,
        width: width ? width : 80,
      }}
      onPress={() => action(value)}
      >
      <View>
        <Text
          style={{
            ...styles.buttonText,
            color: color === '#a5a5a5' ? 'black' : 'white',
          }}>
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10
},
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});
