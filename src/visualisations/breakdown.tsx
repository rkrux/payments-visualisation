import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { getFormattedValue } from '../utils.ts';
import { BASE_COLORS } from '../constants.ts';
import { useConfig } from '../configContext/index.tsx';

const CustomTooltip = (props) => {
  const { active, payload } = props;
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: 'white',
          color: payload[0].payload.fill,
          border: '1px solid lightgray',
        }}
      >
        {`${payload[0].name}`}
      </div>
    );
  }

  return null;
};

function BreakdownViz({ data, id, title }) {
  const [config] = useConfig();

  return (
    <div id={id} className="paddedCenter">
      <div className="vizSize">
        <h2 className="center title">{title}</h2>
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              nameKey="metricKey"
              dataKey="metricValue"
              outerRadius={100}
              label={(data) => {
                return `${getFormattedValue(
                  config.locale,
                  data.value
                )} (${getFormattedValue(config.locale, data.percent * 100)}%)`;
              }}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={BASE_COLORS[index % BASE_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export { BreakdownViz };
