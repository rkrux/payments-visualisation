import paymentsByDate from './paymentsByDate';
import { formatISO, add } from 'date-fns';

const queryData = (dateRange) => {
  const { startDate, endDate } = dateRange;
  let currentDate = startDate,
    zeroConfTranxCountTotal = 0,
    onchainConfTranxCountTotal = 0,
    totalTranxCount = 0,
    zeroConfTimeSecsTotal = 0,
    onchainConfTimeSecsTotal = 0;

  while (currentDate <= endDate) {
    const paymentsOnDate =
      paymentsByDate[formatISO(currentDate, { representation: 'date' })];

    totalTranxCount += paymentsOnDate.totalTranxCount;
    zeroConfTranxCountTotal += paymentsOnDate.zeroConfTranxCount;
    onchainConfTranxCountTotal += paymentsOnDate.onchainConfTranxCount;

    zeroConfTimeSecsTotal += paymentsOnDate.zeroConfTranxTimeSecs;
    onchainConfTimeSecsTotal += paymentsOnDate.onchainConfTranxTimeSecs;

    currentDate = add(currentDate, { days: 1 }); // Granularity
  }

  return {
    dateRange: {
      startDate: formatISO(startDate, { representation: 'date' }),
      endDate: formatISO(endDate, { representation: 'date' }),
    },
    zeroConfTranxPercent: !totalTranxCount
      ? 0
      : (zeroConfTranxCountTotal * 100) / totalTranxCount,
    zeroConfTranxAvgSpeed: !zeroConfTranxCountTotal
      ? 0
      : zeroConfTimeSecsTotal / (zeroConfTranxCountTotal * 60),
    onchainConfTranxAvgSpeed: !onchainConfTranxCountTotal
      ? 0
      : onchainConfTimeSecsTotal / (onchainConfTranxCountTotal * 3600),
  };
};

const values = [
  queryData({
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-31'),
  }),
  queryData({
    startDate: new Date('2021-02-01'),
    endDate: new Date('2021-02-28'),
  }),
  queryData({
    startDate: new Date('2021-03-01'),
    endDate: new Date('2021-03-31'),
  }),
  queryData({
    startDate: new Date('2021-04-01'),
    endDate: new Date('2021-04-30'),
  }),
  queryData({
    startDate: new Date('2021-04-01'),
    endDate: new Date('2021-04-31'),
  }),
  queryData({
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-05-31'),
  }),
];

export default values;
