import { useQuery, UseQueryResult } from 'react-query';
import {
  add,
  differenceInDays,
  endOfDay,
  endOfWeek,
  endOfMonth,
  isBefore,
  startOfDay,
} from 'date-fns';
import {
  paymentsByDate,
  MetricTypes,
  MetricKeyValueMap,
} from './paymentsByDate';
import { DateRangeType } from '../constants';
import { getISOFormattedDate } from 'utils';

type QueryGranularity = ReturnType<typeof calculateQueryGranularity>;
const calculateQueryGranularity = (dateRange: DateRangeType) => {
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

type DateRangeMetricsSummary = ReturnType<
  typeof calculateTranxPercentAndAvgTime
>;
const calculateTranxPercentAndAvgTime = (dateRange: DateRangeType) => {
  const startDate = startOfDay(dateRange.startDate),
    endDate = endOfDay(dateRange.endDate);
  let currentDate = startDate,
    zeroConfTranxCountTotal = 0,
    onchainConfTranxCountTotal = 0,
    totalTranxCount = 0,
    zeroConfTimeSecsTotal = 0,
    onchainConfTimeSecsTotal = 0;

  while (currentDate <= endDate) {
    const formattedDate = getISOFormattedDate(currentDate);
    const paymentsOnDate = paymentsByDate[formattedDate];

    totalTranxCount += paymentsOnDate.totalTranxCount;
    zeroConfTranxCountTotal += paymentsOnDate.zeroConfTranxCount;
    onchainConfTranxCountTotal += paymentsOnDate.onchainConfTranxCount;
    zeroConfTimeSecsTotal += paymentsOnDate.zeroConfTranxTimeSecs;
    onchainConfTimeSecsTotal += paymentsOnDate.onchainConfTranxTimeSecs;

    currentDate = add(currentDate, { days: 1 }); // Granularity
  }

  return {
    timePeriod: getISOFormattedDate(startDate),
    totalTranxCount,
    zeroConfTranxPercent: !totalTranxCount
      ? 0
      : (zeroConfTranxCountTotal * 100) / totalTranxCount,
    onchainConfTranxPercent: !totalTranxCount
      ? 0
      : (onchainConfTranxCountTotal * 100) / totalTranxCount,
    zeroConfTranxAvgTime: !zeroConfTranxCountTotal
      ? 0
      : zeroConfTimeSecsTotal / (zeroConfTranxCountTotal * 60), // minutes
    onchainConfTranxAvgTime: !onchainConfTranxCountTotal
      ? 0
      : onchainConfTimeSecsTotal / (onchainConfTranxCountTotal * 3600), // hours
  };
};

const getUniqueMetricKeysInDateRange = (
  dateRange: DateRangeType,
  metricType: MetricTypes
) => {
  const startDate = startOfDay(dateRange.startDate),
    endDate = endOfDay(dateRange.endDate);
  const uniqueMetricKeys = new Set<string>();

  let currentDate = startDate;
  while (currentDate <= endDate) {
    const formattedDate = getISOFormattedDate(currentDate);
    const dateMetricKeys = paymentsByDate[formattedDate][metricType];
    Object.keys(dateMetricKeys).forEach((dmk) => uniqueMetricKeys.add(dmk));

    currentDate = add(currentDate, { days: 1 }); // Granularity
  }
  return Array.from(uniqueMetricKeys);
};

const calculateEndDateOfPeriod = (
  startDate: Date,
  endDate: Date,
  queryGranularity: QueryGranularity
) => {
  let endDateOfPeriod: Date;
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

const getBaseMetricsWithGivenKeys = (
  uniqueMetricKeys: string[]
): MetricKeyValueMap =>
  uniqueMetricKeys.reduce(
    (metricKeyValueMap, metricKey) => ({
      ...metricKeyValueMap,
      [metricKey]: 0,
    }),
    {}
  );

const calculateMetricsForTimePeriod = (
  startDate: Date,
  endDate: Date,
  metricType: MetricTypes
): MetricKeyValueMap => {
  let currentDate = startDate;
  const metricsForTimePeriod: MetricKeyValueMap = {};

  while (currentDate <= endDate) {
    const formattedDate = getISOFormattedDate(currentDate);
    const dateMetrics = paymentsByDate[formattedDate][metricType];

    Object.entries(dateMetrics).forEach(([metricKey, metricValue]) => {
      const previousValue = metricsForTimePeriod[metricKey] ?? 0;
      metricsForTimePeriod[metricKey] = previousValue + metricValue;
    });

    currentDate = add(currentDate, { days: 1 });
  }

  return metricsForTimePeriod;
};

const mergeMetricsForTimePeriod = (
  baseMetrics: MetricKeyValueMap,
  metricsForTimePeriod: MetricKeyValueMap
): MetricKeyValueMap => {
  return { ...baseMetrics, ...metricsForTimePeriod };
};

type TimePeriod = {
  timePeriod: Date;
};
type DateRangeMetricsByGranularity = TimePeriod | MetricKeyValueMap;
type DateRangeMetricsByGranularityArray = DateRangeMetricsByGranularity[];
const calculateMetricsOfDateRangeByGranularity = (
  dateRange: DateRangeType,
  queryGranularity: QueryGranularity,
  metricType: MetricTypes
): DateRangeMetricsByGranularityArray => {
  const startDate: Date = startOfDay(dateRange.startDate),
    endDate: Date = endOfDay(dateRange.endDate),
    baseMetricsInDateRange: MetricKeyValueMap = getBaseMetricsWithGivenKeys(
      getUniqueMetricKeysInDateRange(dateRange, metricType)
    ),
    metricsOfDateRange: DateRangeMetricsByGranularityArray = [];

  let currentDate = startDate;
  while (currentDate <= endDate) {
    const endDateOfPeriod = calculateEndDateOfPeriod(
      currentDate,
      endDate,
      queryGranularity
    );

    const metricsForTimePeriod: MetricKeyValueMap =
      calculateMetricsForTimePeriod(currentDate, endDateOfPeriod, metricType);

    metricsOfDateRange.push({
      timePeriod: currentDate,
      ...mergeMetricsForTimePeriod(
        baseMetricsInDateRange,
        metricsForTimePeriod
      ),
    });

    currentDate = add(endDateOfPeriod, { days: 1 }); // New period starts a day after end date of previous period
  }

  return metricsOfDateRange;
};

type MetricKeyValueArray = ReturnType<typeof rollUpGranularMetrics>;
const rollUpGranularMetrics = (
  granularMetrics: DateRangeMetricsByGranularity[]
) => {
  const rolledUpMetricsMap: Omit<DateRangeMetricsByGranularity, 'timePeriod'> =
    granularMetrics.reduce(
      (
        rolledUpMetrics: MetricKeyValueMap,
        metricsForTimePeriod: DateRangeMetricsByGranularity,
        index: number
      ) => {
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

type PaymentsQueryData = ReturnType<typeof buildPaymentsQueryData>;
const buildPaymentsQueryData = (dateRange: DateRangeType) => {
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

  return {
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
  };
};

const fetchPaymentsData = async (
  dateRange: DateRangeType
): Promise<PaymentsQueryData> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        const data = buildPaymentsQueryData(dateRange);
        res(data);
      } catch (error) {
        rej(error);
      }
    }, 500); // Dummy 500ms timeout
  });
};

function usePaymentsQuery(
  dateRange: DateRangeType
): UseQueryResult<PaymentsQueryData, Error> {
  return useQuery(['payments', dateRange], async () => {
    return fetchPaymentsData(dateRange);
  });
}

export type {
  PaymentsQueryData,
  MetricKeyValueArray,
  DateRangeMetricsSummary,
  DateRangeMetricsByGranularityArray,
};
export { usePaymentsQuery };
