import { useState } from 'react';
import './App.css';
import { fetchPaymentsData } from './paymentsData/index.ts';
import { useQuery } from 'react-query';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
} from 'recharts';

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

function BreakdownViz({ data }) {
  return (
    <PieChart width={730} height={250}>
      <Pie
        data={data}
        nameKey="metricKey"
        dataKey="metricValue"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
      />
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

function TrendViz({ data }) {
  const metricLines = Object.keys(data[0])
    .filter((key) => key !== 'timePeriod')
    .map((key) => <Line type="monotone" dataKey={key} />);

  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timePeriod" />
      <YAxis />
      <Tooltip />
      <Legend />
      {metricLines}
    </LineChart>
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
      <TrendViz data={data.userWalletsInDateRangeByGranularity} />
      <BreakdownViz data={data.userWalletsBreakdownInDateRange} />
      <TrendViz data={data.paymentMethodsInDateRangeByGranularity} />
      <BreakdownViz data={data.paymentMethodsBreakdownInDateRange} />
    </div>
  );
}

export default App;
