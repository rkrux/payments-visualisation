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
import { getFormattedNumber, getBodyStyleByKey } from '../utils.ts';
import { BASE_COLORS } from '../constants.ts';
import { useConfig } from '../configContext/index.tsx';

const CustomTooltip = (props) => {
  const { active, payload, label } = props;
  const [config] = useConfig();

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
        <span>{`${label}`}</span>
        {payload
          .sort((a, b) => b.value - a.value)
          .map((pl) => (
            <div style={{ color: pl.color }}>{`${pl.name}: ${getFormattedNumber(
              config.locale,
              pl.value
            )}`}</div>
          ))}
      </div>
    );
  }

  return null;
};

function TrendViz({ data, id, metaData }) {
  const [config] = useConfig();

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
        <h2 className="center title">{metaData.title}</h2>
        <ResponsiveContainer width="100%" height="75%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="timePeriod"
              tick={{
                stroke: getBodyStyleByKey('--text-tertiary'),
                strokeWidth: 0.5,
              }}
            >
              <Label
                value={metaData.xAxis}
                offset={0}
                position="insideBottom"
                fill={getBodyStyleByKey('--text-secondary')}
              />
            </XAxis>
            <YAxis
              label={{
                value: metaData.yAxis,
                angle: -90,
                position: 'insideLeft',
                offset: -10,
                fill: getBodyStyleByKey('--text-secondary'),
              }}
              tickFormatter={(tickValue) =>
                getFormattedNumber(config.locale, tickValue)
              }
              tick={{
                stroke: getBodyStyleByKey('--text-tertiary'),
                strokeWidth: 0.5,
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            {metricLines}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export { TrendViz };
