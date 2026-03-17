import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });

    setAnnualData(calculateInvestmentResults(userInput));
  }

  const annualData = calculateInvestmentResults(userInput);

  return (
    <>
      <header id="header">
        <img src="investment-calculator-logo.png" alt="Logo" />
        <h1>Investment Calculator</h1>
      </header>

      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              value={userInput.initialInvestment}
              onChange={(event) =>
                handleChange("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>Anual Investment</label>
            <input
              type="number"
              value={userInput.annualInvestment}
              onChange={(event) =>
                handleChange("annualInvestment", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              value={userInput.expectedReturn}
              onChange={(event) =>
                handleChange("expectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              value={userInput.duration}
              onChange={(event) => handleChange("duration", event.target.value)}
            />
          </p>
        </div>
      </section>

      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Iterest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody className="center">
          {annualData.map((yearData) => {
            // 3. Calculando os dados ausentes para cada ano:
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              userInput.initialInvestment;

            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
