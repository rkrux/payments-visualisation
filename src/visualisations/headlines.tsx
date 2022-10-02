import React from 'react';
import { getFormattedNumber, getFormattedPercent } from '../utils';
import { useAppConfig } from '../configContext';
import { DateRangeMetricsSummary } from 'paymentsData';

function Headline({ metricKey, metricValue }) {
  return (
    <div className="headline">
      <div className="title">{metricKey}</div>
      <h1 className="value">{metricValue}</h1>
    </div>
  );
}

function Headlines({ data }: { data: DateRangeMetricsSummary }) {
  const [config] = useAppConfig();

  return (
    <div className="headlines">
      <Headline
        metricKey="Total Transactions"
        metricValue={getFormattedNumber(config.locale, data.totalTranxCount)}
      />
      <Headline
        metricKey="0-Conf Transactions"
        metricValue={`${getFormattedPercent(
          config.locale,
          data.zeroConfTranxPercent
        )}%`}
      />
      <Headline
        metricKey="0-Conf Avg Time"
        metricValue={`${getFormattedNumber(
          config.locale,
          data.zeroConfTranxAvgTime
        )} mins`}
      />
      <Headline
        metricKey="On-chain Avg Time"
        metricValue={`${getFormattedNumber(
          config.locale,
          data.onchainConfTranxAvgTime
        )} hrs`}
      />
    </div>
  );
}

export { Headlines };
