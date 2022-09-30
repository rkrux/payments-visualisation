import {
  Tooltip,
  Legend,
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { getFormattedValue } from '../utils.ts';
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
          border: '1px solid lightgray',
        }}
      >
        <span>{`${label}`}</span>
        {payload.map((pl) => (
          <div style={{ color: pl.color }}>{`${pl.name}: ${getFormattedValue(
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
        <ResponsiveContainer width="100%" height="80%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timePeriod" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {metricLines}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export { TrendViz };
