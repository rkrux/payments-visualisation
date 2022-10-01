import React from 'react';
import { getFormattedNumber, getFormattedPercent } from '../utils';
import { useConfig } from '../ConfigContext';

function Headline({ metricKey, metricValue }) {
  return (
    <div className="headline">
      <div className="title">{metricKey}</div>
      <h1 className="value">{metricValue}</h1>
    </div>
  );
}

function Headlines({ data }) {
  const [config] = useConfig();

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
          data.zeroConfTranxAvgSpeed
        )} mins`}
      />
      <Headline
        metricKey="On-chain Avg Time"
        metricValue={`${getFormattedNumber(
          config.locale,
          data.onchainConfTranxAvgSpeed
        )} hrs`}
      />
    </div>
  );
}

export { Headlines };
