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
import { useQuery } from 'react-query';

const getFormattedTimePeriod = ({ startDate }) =>
  `${formatISO(startDate, {
    representation: 'date',
  })}`;

const calculateTranxPercentAndAvgTime = (dateRange) => {
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
    timePeriod: getFormattedTimePeriod({ startDate, endDate }),
    totalTranxCount,
    zeroConfTranxPercent: !totalTranxCount
      ? 0
      : (zeroConfTranxCountTotal * 100) / totalTranxCount,
    onchainConfTranxPercent: !totalTranxCount
      ? 0
      : (onchainConfTranxCountTotal * 100) / totalTranxCount,
    zeroConfTranxAvgSpeed: !zeroConfTranxCountTotal
      ? 0
      : zeroConfTimeSecsTotal / (zeroConfTranxCountTotal * 60), // minutes
    onchainConfTranxAvgSpeed: !onchainConfTranxCountTotal
      ? 0
      : onchainConfTimeSecsTotal / (onchainConfTranxCountTotal * 3600), // hours
  };
};

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

const calculateQueryGranularity = (dateRange) => {
  const { startDate, endDate } = dateRange;
  const daysDiff = differenceInDays(endDate, startDate);
  if (daysDiff >= 60) {
    return 'months';
  }
  if (daysDiff >= 14) {
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

const calculateMetricsOfDateRangeByGranularity = (
  dateRange,
  queryGranularity,
  metricKey
) => {
  const startDate = startOfDay(dateRange.startDate),
    endDate = endOfDay(dateRange.endDate),
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
      timePeriod: getFormattedTimePeriod({
        startDate: currentDate,
      }),
      ...mergeMetricsForTimePeriod(
        baseMetricsInDateRange,
        metricsForTimePeriod
      ),
    });
    currentDate = add(endDateOfPeriod, { days: 1 }); // New period starts a day after end date of previous period
  }

  return metricsOfDateRange;
};

const rollUpGranularMetrics = (granularMetrics) => {
  const rolledUpMetricsMap = granularMetrics.reduce(
    (rolledUpMetrics, metricsForTimePeriod, index) => {
      if (index === 0) {
        const baseValue = { ...metricsForTimePeriod };
        delete baseValue.timePeriod;
        return baseValue;
      }

      Object.keys(rolledUpMetrics).forEach((metricKey) => {
        rolledUpMetrics[metricKey] += metricsForTimePeriod[metricKey];
      });
      return rolledUpMetrics;
    },
    {}
  );

  return Object.entries(rolledUpMetricsMap).map(([key, value]) => ({
    metricKey: key,
    metricValue: value,
  }));
};

const fetchPaymentsData = async (dateRange) => {
  return new Promise((res) => {
    const queryGranularity = calculateQueryGranularity(dateRange),
      userWalletsInDateRangeByGranularity =
        calculateMetricsOfDateRangeByGranularity(
          dateRange,
          queryGranularity,
          'userWallets'
        );
    const paymentMethodsInDateRangeByGranularity =
      calculateMetricsOfDateRangeByGranularity(
        dateRange,
        queryGranularity,
        'paymentMethods'
      );

    setTimeout(() => {
      res({
        tranxPercentsAndTimes: calculateTranxPercentAndAvgTime(dateRange),
        queryGranularity,
        userWalletsBreakdownInDateRange: rollUpGranularMetrics(
          userWalletsInDateRangeByGranularity
        ),
        userWalletsInDateRangeByGranularity,
        paymentMethodsBreakdownInDateRange: rollUpGranularMetrics(
          paymentMethodsInDateRangeByGranularity
        ),
        paymentMethodsInDateRangeByGranularity,
      });
    }, 10000); // Dummy 1 sec timeout
  });
};

function usePaymentsQuery(dateRange) {
  return useQuery(['payments', dateRange], async () => {
    const data = await fetchPaymentsData(dateRange);
    return data;
  });
}

export { usePaymentsQuery };
