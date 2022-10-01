import React, { useState } from 'react';
import { ConfigProvider } from './ConfigContext';
import { usePaymentsQuery } from './paymentsData';
import { Headlines, BreakdownViz, TrendViz } from './Visualisations';
import DateRange from './DateRange';
import LocaleSelector from './LocaleSelector';
import { DateRangeType, DEFAULT_DATE_RANGE } from './constants';
import Loader from './Loader';
import './App.css';

function Visualisations({ dateRange }: { dateRange: DateRangeType }) {
  const { isLoading, isError, error, data } = usePaymentsQuery(dateRange);

  if (isLoading) {
    return (
      <div className="loaderWrapper">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div className="center title error">{JSON.stringify(error)}</div>;
  }

  if (!data.tranxPercentsAndTimes.totalTranxCount) {
    return (
      <h2 className="center title error">
        No transactions in this date range!
      </h2>
    );
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
  const [dateRange, setDateRange] = useState<DateRangeType>(DEFAULT_DATE_RANGE);

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
