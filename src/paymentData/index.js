import paymentsByDate from './paymentsByDate';
import {
  formatISO,
  add,
  differenceInDays,
  endOfDay,
  endOfWeek,
  endOfMonth,
  isBefore,
  startOfDay,
} from 'date-fns';

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

const metricDateRanges = [
  {
    startDate: new Date('2021-03-04'),
    endDate: new Date('2021-03-09'),
  },
  {
    startDate: new Date('2021-03-12'),
    endDate: new Date('2021-03-30'),
  },
  {
    startDate: new Date('2021-03-04'),
    endDate: new Date('2021-05-29'),
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

const calculateQueryGranularity = (dateRange) => {
  const { startDate, endDate } = dateRange;
  const daysDiff = differenceInDays(endDate, startDate);
  if (daysDiff >= 60) {
    return 'months';
  }
  if (daysDiff >= 8) {
    return 'weeks';
  }
  return 'days';
};

const calculateEndDateOfPeriod = (startDate, endDate, queryGranularity) => {
  let endDateOfPeriod;
  switch (queryGranularity) {
    case 'days':
      endDateOfPeriod = endOfDay(startDate);
      break;
    case 'weeks':
      endDateOfPeriod = endOfWeek(startDate, { weekStartsOn: 1 });
      break;
    case 'months':
      endDateOfPeriod = endOfMonth(startDate);
      break;
  }

  endDateOfPeriod = isBefore(endDate, endDateOfPeriod)
    ? endDate
    : endDateOfPeriod;
  return endDateOfPeriod;
};

const calculateMetricForTimePeriod = (startDate, endDate, metric) => {
  let currentDate = startDate;
  const metricForTimePeriod = {};

  while (currentDate <= endDate) {
    const formattedDate = formatISO(currentDate, { representation: 'date' });
    const dateMetrics = paymentsByDate[formattedDate][metric];

    Object.entries(dateMetrics).forEach(([metricKey, metricValue]) => {
      const previousValue = metricForTimePeriod[metricKey] ?? 0;
      metricForTimePeriod[metricKey] = previousValue + metricValue;
    });

    currentDate = add(currentDate, { days: 1 });
  }

  return metricForTimePeriod;
};

const calculateMetricsOfDateRangeByGranularity = (dateRange, metricKey) => {
  const endDate = endOfDay(dateRange.endDate),
    queryGranularity = calculateQueryGranularity(dateRange),
    metricsOfDateRange = [];

  let currentDate = startOfDay(dateRange.startDate);
  while (currentDate <= endDate) {
    const endDateOfPeriod = calculateEndDateOfPeriod(
      currentDate,
      endDate,
      queryGranularity
    );

    const metricForTimePeriod = calculateMetricForTimePeriod(
      currentDate,
      endDateOfPeriod,
      metricKey
    );
    metricsOfDateRange.push({
      dateRange: `${formatISO(currentDate, {
        representation: 'date',
      })} -> ${formatISO(endDateOfPeriod, { representation: 'date' })}`,
      ...metricForTimePeriod,
    });
    currentDate = add(endDateOfPeriod, { days: 1 }); // New period starts a day after end date of previous period
  }

  return metricsOfDateRange;
};
const userWalletsInDateRangeByGranularity = metricDateRanges.map((dr) =>
  calculateMetricsOfDateRangeByGranularity(dr, 'userWallets')
);
const paymentMethodsInDateRangeByGranularity = metricDateRanges.map((dr) =>
  calculateMetricsOfDateRangeByGranularity(dr, 'paymentMethods')
);

export {
  tranxPercentsAndTimes,
  uniqueUserWallets,
  uniquePaymentMethods,
  userWalletsInDateRangeByGranularity,
  paymentMethodsInDateRangeByGranularity,
};
