import Border from './components/border/border';
import Screen from './components/screen/screen';
import ButtonKey from './components/button';
import React, { useState } from 'react';

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  const removeSpaces = (num) => num.toString().replace(/\s/g, "")

const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
const App = () => {

  var calc = {
    sign: "",
    num: 0,
    res: 0,
   };
  
    const numClickHandler = (e) => {
      const value = e;
      console.log(e);
      if (calc.num.length < 16) {
          calc.num = calc.num === 0 && value === "0"
              ? "0"
              : calc.num % 1 === 0
              ? Number(calc.num + value)
              : calc.num + value;
          calc.res = !calc.sign ? 0 : calc.res;
        }
    };
  
  
    const commaClickHandler = (e) => {
      const value = e;
      calc.num= !calc.num.toString().includes(".") ? calc.num + value : calc.num;
    };
  
    const signClickHandler = (e) => {
      const value = e;
      console.log(value)
        calc.sign = value;
        calc.res = !calc.res && calc.num ? calc.num : calc.res;
        calc.num = 0;
    };
    
  
    const equalsClickHandler = () => {
      if (calc.sign && calc.num) {
        const math = (a, b, sign) =>
          calc.sign === "+"
            ? a + b
            : calc.sign === "-"
            ? a - b
            : calc.sign === "X"
            ? a * b
            : a / b;
        calc.res =
            calc.num === "0" && calc.sign === "/"
              ? "Can't divide with 0"
              : math(Number(calc.res), Number(calc.num), calc.sign);
        calc.sign= "";
        calc.num= 0;
      }
    };
  
    // equalsClickHandler function
  
  const invertClickHandler = () => {
        calc.num = calc.num ? calc.num * -1 : 0;
        calc.res = calc.res ? calc.res * -1 : 0;
        calc.sign = "";
      };
  
    // invertClickHandler function
  
  const percentClickHandler = () => {
      let num = calc.num ? parseFloat(calc.num) : 0;
      let res = calc.res ? parseFloat(calc.res) : 0;
        calc.num = (num /= Math.pow(100, 1));
        calc.res = (res /= Math.pow(100, 1));
        calc.sign= "";
    };
  
    // percentClickHandler function
  
  const resetClickHandler = () => {
        calc.sign = "";
        calc.num = 0;
        calc.res = 0;
    };


  return (
    <Border>
      <Screen value = {calc.num ? calc.num : calc.res} />
        {
          buttonValues.map((btn, i) => {
            return (
              <>
                <ButtonKey
                  key={i}
                  className={null}
                  value={btn}
                  resetClickHandler = {resetClickHandler}
                  invertClickHandler = {invertClickHandler}
                  percentClickHandler = {percentClickHandler}
                  equalsClickHandler = {equalsClickHandler}
                  signClickHandler = {signClickHandler}
                  commaClickHandler = {commaClickHandler}
                  numClickHandler = {numClickHandler}
                />
              </>
              );
          })
        }
    </Border>
  );
};

export default App;