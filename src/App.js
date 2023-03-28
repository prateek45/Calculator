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

const math = (a, b, sign) =>
  sign === "+" ? a + b : sign === "-" ? a - b : sign === "X" ? a * b : a / b;

const App = () => {

  let [calc, setcalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e) => {
    const value = e;
    console.log(e);

    if (removeSpaces(calc.num).length < 16) {
      setcalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
              ? toLocaleString(Number(removeSpaces(calc.num + value)))
              : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
    console.log(calc)
  };


  const commaClickHandler = (e) => {
    const value = e;

    setcalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    const value = e;
    console.log(value)

    setcalc({
      ...calc,
      sign: value,
      res: !calc.num ? calc.res : !calc.res ? calc.num : toLocaleString(
        math(
          Number(removeSpaces(calc.res)),
          Number(removeSpaces(calc.num)),
          calc.sign
        )
      ),
      num: 0,

    });
  };


  const equalsClickHandler = () => {
    console.log("Hi")
    console.log(calc.sign && calc.num);
    console.log(calc.sign)
    console.log(calc.num)
    if (calc.sign && calc.num) {
      setcalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
              math(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sign
              )
            ),
        sign: "",
        num: 0,
      });
    }
    
  };

  // equalsClickHandler function

  const invertClickHandler = () => {
    setcalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    });
  };

  // invertClickHandler function

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setcalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  // percentClickHandler function

  const resetClickHandler = () => {

    setcalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };


  return (
    <Border>
      <Screen value={calc.num ? calc.num : calc.res} />
      {
        buttonValues.map((btn, i) => {
          return (
            <>
              <ButtonKey
                key={i}
                className={null}
                value={btn}
                resetClickHandler={resetClickHandler}
                invertClickHandler={invertClickHandler}
                percentClickHandler={percentClickHandler}
                equalsClickHandler={equalsClickHandler}
                signClickHandler={signClickHandler}
                commaClickHandler={commaClickHandler}
                numClickHandler={numClickHandler}
              />
            </>
          );
        })
      }
    </Border>
  );
};

export default App;