import paymentsByDate from './paymentsByDate.ts';
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
  const startDate = startOfDay(dateRange.startDate),
    endDate = endOfDay(dateRange.endDate);
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

const getUniqueMetricKeysInDateRange = (dateRange, metricKey) => {
  const startDate = startOfDay(dateRange.startDate),
    endDate = endOfDay(dateRange.endDate);
  const uniqueMetricKeys = new Set();

  let currentDate = startDate;
  while (currentDate <= endDate) {
    const formattedDate = formatISO(currentDate, { representation: 'date' });
    const dateMetricKeys = paymentsByDate[formattedDate][metricKey];
    Object.keys(dateMetricKeys).forEach((dmk) => uniqueMetricKeys.add(dmk));

    currentDate = add(currentDate, { days: 1 }); // Granularity
  }
  return [...uniqueMetricKeys];
};
const uniqueUserWalletsInDateRange = dateRanges.map((dr) =>
  getUniqueMetricKeysInDateRange(dr, 'userWallets')
);
const uniquePaymentMethodsInDateRange = dateRanges.map((dr) =>
  getUniqueMetricKeysInDateRange(dr, 'paymentMethods')
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

const calculateMetricsForTimePeriod = (startDate, endDate, metric) => {
  let currentDate = startDate;
  const metricsForTimePeriod = {};

  while (currentDate <= endDate) {
    const formattedDate = formatISO(currentDate, { representation: 'date' });
    const dateMetrics = paymentsByDate[formattedDate][metric];

    Object.entries(dateMetrics).forEach(([metricKey, metricValue]) => {
      const previousValue = metricsForTimePeriod[metricKey] ?? 0;
      metricsForTimePeriod[metricKey] = previousValue + metricValue;
    });

    currentDate = add(currentDate, { days: 1 });
  }

  return metricsForTimePeriod;
};

const getBaseMetricsWithGivenKeys = (metricKeys) => {
  return metricKeys.reduce(
    (metricKeyValueMap, metricKey) => ({
      ...metricKeyValueMap,
      [metricKey]: 0,
    }),
    {}
  );
};

const mergeMetricsForTimePeriod = (baseMetrics, metricsForTimePeriod) => {
  return { ...baseMetrics, ...metricsForTimePeriod };
};

const calculateMetricsOfDateRangeByGranularity = (dateRange, metricKey) => {
  const startDate = startOfDay(dateRange.startDate),
    endDate = endOfDay(dateRange.endDate),
    queryGranularity = calculateQueryGranularity(dateRange),
    metricsOfDateRange = [],
    baseMetricsInDateRange = getBaseMetricsWithGivenKeys(
      getUniqueMetricKeysInDateRange(dateRange, metricKey)
    );

  let currentDate = startDate;
  while (currentDate <= endDate) {
    const endDateOfPeriod = calculateEndDateOfPeriod(
      currentDate,
      endDate,
      queryGranularity
    );

    const metricsForTimePeriod = calculateMetricsForTimePeriod(
      currentDate,
      endDateOfPeriod,
      metricKey
    );
    metricsOfDateRange.push({
      timePeriod: `${formatISO(currentDate, {
        representation: 'date',
      })} | ${formatISO(endDateOfPeriod, { representation: 'date' })}`,
      ...mergeMetricsForTimePeriod(
        baseMetricsInDateRange,
        metricsForTimePeriod
      ),
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
  uniqueUserWalletsInDateRange,
  uniquePaymentMethodsInDateRange,
  userWalletsInDateRangeByGranularity,
  paymentMethodsInDateRangeByGranularity,
};
