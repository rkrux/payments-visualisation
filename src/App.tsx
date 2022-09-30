import { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { usePaymentsQuery } from './paymentsData/index.ts';
import { Headlines, BreakdownViz, TrendViz } from './visualisations/index.tsx';
import './App.css';

function DateRange({ dateRange, updateDateRange }) {
  const [value, onChange] = useState([dateRange.startDate, dateRange.endDate]);

  return (
    <div id="dateRange" className="paddedCenter">
      <DateRangePicker
        value={value}
        onChange={(newDates) => {
          onChange(newDates);
          updateDateRange({ startDate: newDates[0], endDate: newDates[1] });
        }}
        minDate={new Date('2021-01-01')}
        maxDate={new Date('2021-05-31')}
      />
    </div>
  );
}

function App() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-05-31'),
  });
  const { isLoading, isError, error, data } = usePaymentsQuery(dateRange);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div className="app">
      <div className="container">
        <DateRange
          dateRange={dateRange}
          updateDateRange={(dr) => setDateRange(dr)}
        />
        <Headlines data={data.tranxPercentsAndTimes} />
        <BreakdownViz
          id="userWalletsBreakdown"
          title="User Wallets Breakdown"
          data={data.userWalletsBreakdownInDateRange}
        />
        <TrendViz
          id="userWalletsTrend"
          title="User Wallets Trend"
          data={data.userWalletsInDateRangeByGranularity}
        />
        <BreakdownViz
          id="paymentMethodsBreakdown"
          title="Payment Methods Breakdown"
          data={data.paymentMethodsBreakdownInDateRange}
        />
        <TrendViz
          id="paymentMethodsTrend"
          title="Payment Methods Trend"
          data={data.paymentMethodsInDateRangeByGranularity}
        />
      </div>
    </div>
  );
}

export default App;
