import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  const [calVal, setVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setVal(result);
    } else {
      const newValue = calVal + buttonText;
      setVal(newValue);
    }
  };

  return (
    <div className={styles.cal}>
      <Display disVal={calVal}></Display>
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  );
}

export default App;
