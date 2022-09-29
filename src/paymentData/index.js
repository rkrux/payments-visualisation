import paymentsByDate from './paymentsByDate';
import { formatISO, add } from 'date-fns';

const dateRanges = [
  {
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-31'),
  },
  {
    startDate: new Date('2021-02-01'),
    endDate: new Date('2021-02-28'),
  },
  {
    startDate: new Date('2021-03-01'),
    endDate: new Date('2021-03-31'),
  },
  {
    startDate: new Date('2021-04-01'),
    endDate: new Date('2021-04-30'),
  },
  {
    startDate: new Date('2021-05-01'),
    endDate: new Date('2021-05-31'),
  },
  {
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-05-31'),
  },
];

const calculateTranxPercentAndTime = (dateRange) => {
  const { startDate, endDate } = dateRange;
  let currentDate = startDate,
    zeroConfTranxCountTotal = 0,
    onchainConfTranxCountTotal = 0,
    totalTranxCount = 0,
    zeroConfTimeSecsTotal = 0,
    onchainConfTimeSecsTotal = 0;

  while (currentDate <= endDate) {
    const formattedDate = formatISO(currentDate, { representation: 'date' });
    const paymentsOnDate = paymentsByDate[formattedDate];

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
    onchainConfTranxPercent: !totalTranxCount
      ? 0
      : (onchainConfTranxCountTotal * 100) / totalTranxCount,
    zeroConfTranxAvgSpeed: !zeroConfTranxCountTotal
      ? 0
      : zeroConfTimeSecsTotal / (zeroConfTranxCountTotal * 60),
    onchainConfTranxAvgSpeed: !onchainConfTranxCountTotal
      ? 0
      : onchainConfTimeSecsTotal / (onchainConfTranxCountTotal * 3600),
  };
};
const tranxPercentsAndTimes = dateRanges.map((dr) =>
  calculateTranxPercentAndTime(dr)
);

const getUniqueUserWallets = (dateRange) => {
  const { startDate, endDate } = dateRange;
  const uniqueUserWallets = new Set();
  let currentDate = startDate;

  while (currentDate <= endDate) {
    const formattedDate = formatISO(currentDate, { representation: 'date' });
    const userWalletsUsedOnDate = paymentsByDate[formattedDate].userWallets;
    Object.keys(userWalletsUsedOnDate).forEach((wallet) =>
      uniqueUserWallets.add(wallet)
    );

    currentDate = add(currentDate, { days: 1 }); // Granularity
  }
  return [...uniqueUserWallets];
};
const uniqueUserWallets = dateRanges.map((dr) => getUniqueUserWallets(dr));

const getUniquePaymentMethods = (dateRange) => {
  const { startDate, endDate } = dateRange;
  const uniquePaymentMethods = new Set();
  let currentDate = startDate;

  while (currentDate <= endDate) {
    const formattedDate = formatISO(currentDate, { representation: 'date' });
    const paymentMethodsUsedOnDate =
      paymentsByDate[formattedDate].paymentMethods;
    Object.keys(paymentMethodsUsedOnDate).forEach((method) =>
      uniquePaymentMethods.add(method)
    );

    currentDate = add(currentDate, { days: 1 }); // Granularity
  }
  return [...uniquePaymentMethods];
};
const uniquePaymentMethods = dateRanges.map((dr) =>
  getUniquePaymentMethods(dr)
);

export { tranxPercentsAndTimes, uniqueUserWallets, uniquePaymentMethods };
