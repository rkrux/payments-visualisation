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

function BreakdownViz({ data, id, title }) {
  return (
    <div id={id} className="paddedCenter">
      <div>
        <h3 className="center">{title}</h3>
        <PieChart width={730} height={250}>
          <Pie
            data={data}
            nameKey="metricKey"
            dataKey="metricValue"
            outerRadius="100%"
            fill="#8884d8"
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

function TrendViz({ data, id, title }) {
  const metricLines = Object.keys(data[0])
    .filter((key) => key !== 'timePeriod')
    .map((key) => <Line type="monotone" dataKey={key} />);

  return (
    <div id={id} className="paddedCenter">
      <div>
        <h3 className="center">{title}</h3>
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
      </div>
    </div>
  );
}

function Headline({ metricKey, metricValue }) {
  return (
    <div className="headline">
      <div className="title">{metricKey}</div>
      <div className="value">{metricValue}</div>
    </div>
  );
}

function Headlines({ data }) {
  return (
    <div className="headlines">
      <Headline
        metricKey="Total Transactions"
        metricValue={data.totalTranxCount}
      />
      <Headline
        metricKey="0-Conf Transactions"
        metricValue={`${data.zeroConfTranxPercent.toFixed(2)}%`}
      />
      <Headline
        metricKey="0-Conf Avg Time"
        metricValue={`${data.zeroConfTranxAvgSpeed.toFixed(2)} mins`}
      />
      <Headline
        metricKey="On-chain Avg Time"
        metricValue={`${data.onchainConfTranxAvgSpeed.toFixed(2)} hrs`}
      />
    </div>
  );
}

function App() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date('2021-03-02'),
    endDate: new Date('2021-03-28'),
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
