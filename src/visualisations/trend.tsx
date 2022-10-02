import React from 'react';
import {
  Tooltip,
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Label,
} from 'recharts';
import ReactTooltip from 'react-tooltip';
import { getFormattedNumber, getBodyStyleByKey } from '../utils';
import { BASE_COLORS } from '../constants';
import { useAppConfig } from '../configContext';
import { DateRangeMetricsByGranularityArray } from 'paymentsData';
import './styles.css';

const CustomTooltip = (props) => {
  const { active, payload, label } = props;
  const [config] = useAppConfig();

  if (active && payload && payload.length) {
    return (
      <div
        style={{
          padding: '1rem',
          backgroundColor: 'white',
          border: '1px solid',
          borderColor: getBodyStyleByKey('--border-primary'),
        }}
      >
        <p className="title">{label}</p>
        {payload
          .sort((first, second) => second.value - first.value)
          .map((payloadItem) => (
            <div style={{ color: payloadItem.color }}>{`${
              payloadItem.name
            }: ${getFormattedNumber(config.locale, payloadItem.value)}`}</div>
          ))}
      </div>
    );
  }

  return null;
};

function TrendViz({
  id,
  data,
  metaData: { title, xAxis, yAxis },
}: {
  id: string;
  data: DateRangeMetricsByGranularityArray;
  metaData: any;
}) {
  const [config] = useAppConfig();

  const metricLines = Object.keys(data[0])
    .filter((key) => key !== 'timePeriod')
    .map((key, index) => (
      <Line
        dataKey={key}
        type="monotone"
        activeDot={{ r: 8 }}
        stroke={BASE_COLORS[index % BASE_COLORS.length]}
      />
    ));

  return (
    <div id={id} className="paddedCenter">
      <div className="vizSize">
        <div className="center">
          <h2 className="title marginRight">{title}</h2>
          <span data-tip data-for="granularityInfo">
            &#9432;
          </span>
          <ReactTooltip id="granularityInfo" type="info">
            <span>
              Time granularity (days/weeks/months) is calculated automatically
              based on the date range size
            </span>
          </ReactTooltip>
        </div>
        <ResponsiveContainer width="100%" height="75%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="timePeriod"
              tick={{
                stroke: getBodyStyleByKey('--text-secondary'),
                strokeWidth: 0.7,
              }}
            >
              <Label
                value={xAxis}
                dy={6}
                position="insideBottom"
                fill={getBodyStyleByKey('--text-tertiary')}
                className="label"
              />
            </XAxis>
            <YAxis
              tickFormatter={(tickValue) =>
                getFormattedNumber(config.locale, tickValue)
              }
              tick={{
                stroke: getBodyStyleByKey('--text-secondary'),
                strokeWidth: 0.7,
              }}
            >
              <Label
                value={yAxis}
                angle={-90}
                position="insideBottomLeft"
                dx={-10}
                fill={getBodyStyleByKey('--text-tertiary')}
                className="label"
              />
            </YAxis>
            <Tooltip content={<CustomTooltip />} />
            {metricLines}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export { TrendViz };
