function App() {
  return (
    <>
      <header id="header">
        <img src="investment-calculator-logo.png" alt="Logo" />
        <h1>Investment Calculator</h1>
      </header>

      <section id="user-input">
        <div class="input-group">
          <p>
            <label>Initial Investment</label>
            <input type="number" />
          </p>
          <p>
            <label>Anual Investment</label>
            <input type="number" />
          </p>
        </div>
        <div class="input-group">
          <p>
            <label>Expected Return</label>
            <input type="number" />
          </p>
          <p>
            <label>Duration</label>
            <input type="number" />
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
        <tbody class="center">
          <tr>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
