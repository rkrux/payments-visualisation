import { useState } from 'react';
import { ConfigProvider } from './configContext/index.tsx';
import { usePaymentsQuery } from './paymentsData/index.ts';
import { Headlines, BreakdownViz, TrendViz } from './visualisations/index.tsx';
import DateRange from './dateRange/index.tsx';
import { DEFAULT_DATE_RANGE } from './constants.ts';
import './App.css';
import { useConfig } from './configContext/index.tsx';

function LocaleSelector() {
  const [config, dispatch] = useConfig();

  return (
    <div>
      <label>Select locale</label>
      <select
        value={config.locale}
        onChange={(e) => dispatch({ type: 'locale', value: e.target.value })}
      >
        <option value="en-US">English (US)</option>
        <option value="es-ES">Spanish (Spain)</option>
      </select>
    </div>
  );
}

function Wrapper() {
  const [dateRange, setDateRange] = useState(DEFAULT_DATE_RANGE);
  const { isLoading, isError, error, data } = usePaymentsQuery(dateRange);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div className="error">{JSON.stringify(error)}</div>;
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="center title noMargin">Payments Visualisation</h1>
        <div className="center">
          <DateRange
            dateRange={dateRange}
            updateDateRange={(dr) => setDateRange(dr)}
          />
          <LocaleSelector />
        </div>
        <Headlines data={data.tranxPercentsAndTimes} />
        <BreakdownViz
          id="userWalletsBreakdown"
          title="User Wallets Breakdown"
          data={data.userWalletsBreakdownInDateRange}
        />
        <TrendViz
          id="userWalletsTrend"
          metaData={{
            title: 'User Wallets Trend',
            xAxis: 'Time period',
            yAxis: 'Number of user wallets',
          }}
          data={data.userWalletsInDateRangeByGranularity}
        />
        <BreakdownViz
          id="paymentMethodsBreakdown"
          title="Payment Methods Breakdown"
          data={data.paymentMethodsBreakdownInDateRange}
        />
        <TrendViz
          id="paymentMethodsTrend"
          metaData={{
            title: 'Payment Methods Trend',
            xAxis: 'Time period',
            yAxis: 'Number of payment methods',
          }}
          data={data.paymentMethodsInDateRangeByGranularity}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <ConfigProvider>
      <Wrapper />
    </ConfigProvider>
  );
}

export default App;
