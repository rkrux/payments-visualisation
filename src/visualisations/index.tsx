import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { BASE_COLORS } from '../constants.ts';

function BreakdownViz({ data, id, title }) {
  return (
    <div id={id} className="paddedCenter">
      <div className="vizSize">
        <h3 className="center">{title}</h3>
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              nameKey="metricKey"
              dataKey="metricValue"
              outerRadius={90}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={BASE_COLORS[index % BASE_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

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
        <h3 className="center">{metaData.title}</h3>
        <ResponsiveContainer width="100%" height="80%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timePeriod" />
            <YAxis />
            <Tooltip />
            <Legend />
            {metricLines}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Headline({ metricKey, metricValue }) {
  return (
    <div className="headline">
      <div className="title">{metricKey}</div>
      <div className="value">{metricValue}</div>
    </div>
  );
}

function Headlines({ data }) {
  return (
    <div className="headlines">
      <Headline
        metricKey="Total Transactions"
        metricValue={data.totalTranxCount}
      />
      <Headline
        metricKey="0-Conf Transactions"
        metricValue={`${data.zeroConfTranxPercent.toFixed(2)}%`}
      />
      <Headline
        metricKey="0-Conf Avg Time"
        metricValue={`${data.zeroConfTranxAvgSpeed.toFixed(2)} mins`}
      />
      <Headline
        metricKey="On-chain Avg Time"
        metricValue={`${data.onchainConfTranxAvgSpeed.toFixed(2)} hrs`}
      />
    </div>
  );
}

export { BreakdownViz, TrendViz, Headlines };
