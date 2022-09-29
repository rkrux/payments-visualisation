import './App.css';
import {
  tranxPercentsAndTimes,
  uniqueUserWallets,
  uniquePaymentMethods,
} from './paymentData/index';

function App() {
  return (
    <div className="App">
      <>
        {tranxPercentsAndTimes.map((result) => (
          <p>
            <div>{`${result.dateRange.startDate} -> ${result.dateRange.endDate}`}</div>
            <div>{result.zeroConfTranxPercent.toFixed(2)} %</div>
            <div>{result.onchainConfTranxPercent.toFixed(2)} %</div>
            <div>{result.zeroConfTranxAvgSpeed.toFixed(2)} mins</div>
            <div>{result.onchainConfTranxAvgSpeed.toFixed(2)} hrs</div>
          </p>
        ))}
        {uniqueUserWallets.map((userWallets) => (
          <p>{userWallets.join(',')}</p>
        ))}
        {uniquePaymentMethods.map((pm) => (
          <p>{pm.join(',')}</p>
        ))}
      </>
    </div>
  );
}

export default App;
