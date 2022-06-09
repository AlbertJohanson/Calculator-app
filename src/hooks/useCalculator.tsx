import { useRef, useState } from "react";


enum Operators {
    ADD = '+',
    SUB = '-',
    MUL = '*',
    DIV = '/',
  }

export const useCalculator = () => {
    const [number, setNumber] = useState('0');
    const [beforeNumber, setBeforeNumber] = useState('0');
  
    const lastOperation = useRef<Operators>();
  
    const handleClean = () => {
      setNumber('0');
      setBeforeNumber('0');
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
        setNumber(number.slice(0, -1));
      } else {
        setNumber('0');
      }
    };
  
    const positiveNegative = () => {
      if (number.includes('-')) {
        setNumber(number.replace('-', ''));
      } else {
        setNumber('-' + number);
      }
    };
  
    const handleOperation = () => {
      setBeforeNumber(number);
      setNumber('0');
    };
  
    const handleDIV = () => {
      handleOperation();
      lastOperation.current = Operators.DIV;
    };
  
    const handleMUL = () => {
      handleOperation();
      lastOperation.current = Operators.MUL;
    };
  
    const handleSUB = () => {
      handleOperation();
      lastOperation.current = Operators.SUB;
    };
  
    const handleADD = () => {
      handleOperation();
      lastOperation.current = Operators.ADD;
    };
  
  
    const handleResult = () => {
      
      const num1 = Number( number );
      const num2 = Number( beforeNumber );
  
      switch (lastOperation.current) {
          case Operators.ADD:
              setNumber( `${num1 + num2}` );
              break;
          case Operators.SUB:
              setNumber( `${num2 - num1}` );
              break;
          case Operators.MUL:
              setNumber( `${num1 * num2}` );
              break;
          case Operators.DIV:
              setNumber( `${num2 / num1}` );
              break;
      }
  
      setBeforeNumber( '0' );
  
    }


    return {
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
    }
}

