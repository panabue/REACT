import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />

      <UserInput userInput={userInput} handleChange={handleChange} />

      {!inputIsValid && (
        <p className="center">Please enter a valid input data</p>
      )}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
