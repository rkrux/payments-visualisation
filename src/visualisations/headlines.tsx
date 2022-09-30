import { getFormattedValue } from '../utils.ts';
import { useConfig } from '../configContext/index.tsx';

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
        metricValue={getFormattedValue(config.locale, data.totalTranxCount)}
      />
      <Headline
        metricKey="0-Conf Transactions"
        metricValue={`${getFormattedValue(
          config.locale,
          data.zeroConfTranxPercent
        )}%`}
      />
      <Headline
        metricKey="0-Conf Avg Time"
        metricValue={`${getFormattedValue(
          config.locale,
          data.zeroConfTranxAvgSpeed
        )} mins`}
      />
      <Headline
        metricKey="On-chain Avg Time"
        metricValue={`${getFormattedValue(
          config.locale,
          data.onchainConfTranxAvgSpeed
        )} hrs`}
      />
    </div>
  );
}

export { Headlines };
