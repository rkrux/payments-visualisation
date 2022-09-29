import './App.css';
import { fetchPaymentsData } from './paymentsData/index.ts';
import { useQuery } from 'react-query';

function usePaymentsQuery(dateRange) {
  return useQuery(['payments', dateRange], async () => {
    const data = await fetchPaymentsData(dateRange);
    return data;
  });
}

function App() {
  const { isLoading, isError, error, data } = usePaymentsQuery({
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-05-31'),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <p>{JSON.stringify(data.tranxPercentsAndTimes)}</p>
      <p>{JSON.stringify(data.userWalletsInDateRangeByGranularity)}</p>
      <p>{JSON.stringify(data.userWalletsBreakdownInDateRange)}</p>
      <p>{JSON.stringify(data.paymentMethodsInDateRangeByGranularity)}</p>
      <p>{JSON.stringify(data.paymentMethodsBreakdownInDateRange)}</p>
    </div>
  );
}

export default App;
