import { useState } from 'react';
import { ConfigProvider } from './configContext/index.tsx';
import { usePaymentsQuery } from './paymentsData/index.ts';
import { Headlines, BreakdownViz, TrendViz } from './visualisations/index.tsx';
import DateRange from './dateRange/index.tsx';
import LocaleSelector from './localeSelector/index.tsx';
import { DEFAULT_DATE_RANGE } from './constants.ts';
import Loader from './loader/index.tsx';
import './App.css';

function Visualisations({ dateRange }) {
  const { isLoading, isError, error, data } = usePaymentsQuery(dateRange);

  if (isLoading) {
    return (
      <div className="loaderWrapper">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div className="error">{JSON.stringify(error)}</div>;
  }

  return (
    <>
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
          xAxis: `Time period (${data.queryGranularity})`,
          yAxis: 'User wallets',
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
          xAxis: `Time period (${data.queryGranularity})`,
          yAxis: 'Payment methods',
        }}
        data={data.paymentMethodsInDateRangeByGranularity}
      />
    </>
  );
}

function App() {
  const [dateRange, setDateRange] = useState(DEFAULT_DATE_RANGE);

  return (
    <ConfigProvider>
      <div className="app">
        <div className="container">
          <h1 className="center title noMargin">Payments Visualisation</h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              padding: '2rem',
            }}
          >
            <DateRange
              dateRange={dateRange}
              updateDateRange={(dr) => setDateRange(dr)}
            />
            <LocaleSelector />
          </div>
          <Visualisations dateRange={dateRange} />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
