import './App.css';
import paymentsQueries from './paymentData/index';

function App() {
  return (
    <div className="App">
      <>
        {paymentsQueries.map((result) => (
          <p>
            <div>{`${result.dateRange.startDate} -> ${result.dateRange.endDate}`}</div>
            <div>{result.zeroConfTranxPercent.toFixed(2)} %</div>
            <div>{result.zeroConfTranxAvgSpeed.toFixed(2)} mins</div>
            <div>{result.onchainConfTranxAvgSpeed.toFixed(2)} hrs</div>
          </p>
        ))}
      </>
    </div>
  );
}

export default App;
