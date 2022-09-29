import { useState } from 'react';
import './App.css';
import { fetchPaymentsData } from './paymentsData/index.ts';
import { useQuery } from 'react-query';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

function usePaymentsQuery(dateRange) {
  return useQuery(['payments', dateRange], async () => {
    const data = await fetchPaymentsData(dateRange);
    return data;
  });
}

function DateRange({ dateRange, updateDateRange }) {
  const [value, onChange] = useState([dateRange.startDate, dateRange.endDate]);

  return (
    <DateRangePicker
      value={value}
      onChange={(newDates) => {
        onChange(newDates);
        updateDateRange({ startDate: newDates[0], endDate: newDates[1] });
      }}
      minDate={new Date('2021-01-01')}
      maxDate={new Date('2021-05-31')}
    />
  );
}

function App() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date('2021-03-15'),
    endDate: new Date('2021-03-16'),
  });
  const { isLoading, isError, error, data } = usePaymentsQuery(dateRange);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <DateRange
        dateRange={dateRange}
        updateDateRange={(dr) => setDateRange(dr)}
      />
      <p>{JSON.stringify(data.tranxPercentsAndTimes)}</p>
      <p>{JSON.stringify(data.userWalletsInDateRangeByGranularity)}</p>
      <p>{JSON.stringify(data.userWalletsBreakdownInDateRange)}</p>
      <p>{JSON.stringify(data.paymentMethodsInDateRangeByGranularity)}</p>
      <p>{JSON.stringify(data.paymentMethodsBreakdownInDateRange)}</p>
    </div>
  );
}

export default App;
