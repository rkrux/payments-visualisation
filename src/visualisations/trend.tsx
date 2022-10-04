import React, { useState } from 'react';
import {
  Tooltip,
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Label,
  Legend,
} from 'recharts';
import ReactTooltip from 'react-tooltip';
import {
  getFormattedNumber,
  getBodyStyleByKey,
  getFormattedDate,
} from '../utils';
import { BASE_COLORS } from '../constants';
import { useAppConfig } from '../configContext';
import { DateRangeMetricsByGranularityArray } from 'paymentsData';
import './styles.css';

const CustomTooltip = (props) => {
  const { active, payload, label } = props;
  const [appConfig] = useAppConfig();

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
        <p className="title">{getFormattedDate(appConfig.locale, label)}</p>
        {payload
          .sort((first, second) => second.value - first.value)
          .map((payloadItem, index: number) => (
            <div key={index} style={{ color: payloadItem.color }}>{`${
              payloadItem.name
            }: ${getFormattedNumber(
              appConfig.locale,
              payloadItem.value
            )}`}</div>
          ))}
      </div>
    );
  }

  return null;
};

const getMetricsKeys = (data: DateRangeMetricsByGranularityArray): string[] =>
  Object.keys(data[0]).filter((key) => key !== 'timePeriod');

const getDefaultChartConfig = (metricsKeys: string[]) =>
  metricsKeys.reduce((map, key) => {
    map[key] = {
      strokeWidth: 1,
      opacity: 1,
    };
    return map;
  }, {});

function TrendViz({
  id,
  data,
  metaData: { title, xAxis, yAxis },
}: {
  id: string;
  data: DateRangeMetricsByGranularityArray;
  metaData: any;
}) {
  const metricsKeys = getMetricsKeys(data);
  const [appConfig] = useAppConfig();
  const [chartConfig, setChartConfig] = useState(
    getDefaultChartConfig(metricsKeys)
  );

  const handleOnMouseEnter = (o) => {
    const { dataKey } = o;
    setChartConfig((cc) => {
      Object.keys(cc)
        .filter((key) => key !== dataKey)
        .forEach((key) => {
          cc[key] = {
            strokeWidth: 1,
            opacity: 0.5,
          };
        });
      cc[dataKey] = {
        strokeWidth: 3,
        opacity: 1,
      };
      return { ...cc };
    });
  };

  const handleOnMouseLeave = (o) => {
    setChartConfig(getDefaultChartConfig(metricsKeys));
  };

  const metricLines = metricsKeys.map((key, index) => (
    <Line
      key={index}
      dataKey={key}
      type="monotone"
      activeDot={{ r: 8 }}
      stroke={BASE_COLORS[index % BASE_COLORS.length]}
      strokeWidth={chartConfig[key].strokeWidth}
      opacity={chartConfig[key].opacity}
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
            <div>
              Time granularity (days/weeks/months) is calculated automatically
              based on the date range size.
            </div>
            <p>
              Hover over the key in the legend to highlight its line in the
              chart.
            </p>
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
              tickFormatter={(tickValue) =>
                getFormattedDate(appConfig.locale, tickValue)
              }
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
              tick={{
                stroke: getBodyStyleByKey('--text-secondary'),
                strokeWidth: 0.7,
              }}
              tickFormatter={(tickValue) =>
                getFormattedNumber(appConfig.locale, tickValue)
              }
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
            <Legend
              verticalAlign="top"
              wrapperStyle={{
                paddingBottom: '1rem',
              }}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            {metricLines}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export { TrendViz };
