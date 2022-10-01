import React, { useState } from 'react';
import { AppConfigProvider } from './ConfigContext';
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
        No transactions in this date range, try another date range!
      </h2>
    );
  }

  return (
    <>
      <Headlines data={data.tranxPercentsAndTimes} />
      <BreakdownViz
        id="userWalletsBreakdown"
        data={data.userWalletsBreakdownInDateRange}
        metaData={{
          title: 'User Wallets Breakdown',
        }}
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
        data={data.paymentMethodsBreakdownInDateRange}
        metaData={{
          title: 'Payment Methods Breakdown',
        }}
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
    <AppConfigProvider>
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
    </AppConfigProvider>
  );
}

export default App;
