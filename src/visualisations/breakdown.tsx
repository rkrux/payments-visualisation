import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import {
  getFormattedNumber,
  getFormattedPercent,
  getBodyStyleByKey,
} from '../utils';
import { BASE_COLORS } from '../constants';
import { useAppConfig } from '../configContext';
import { MetricKeyValueArray } from 'paymentsData';
import './styles.css';

const CustomTooltip = (props) => {
  const [config] = useAppConfig();
  const { active, payload } = props;

  if (active && payload && payload.length) {
    return (
      <div
        style={{
          padding: '0.5rem',
          backgroundColor: 'white',
          color: payload[0].payload.fill,
          border: '1px solid',
          borderColor: getBodyStyleByKey('--border-primary'),
        }}
      >
        {`${payload[0].name}:  ${getFormattedNumber(
          config.locale,
          payload[0].value
        )}`}
      </div>
    );
  }

  return null;
};

function BreakdownViz({
  id,
  data,
  metaData: { title },
}: {
  id: string;
  data: MetricKeyValueArray;
  metaData: any;
}) {
  const [config] = useAppConfig();

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
              outerRadius="80%"
              label={(data) => {
                return `${data.name} (${getFormattedPercent(
                  config.locale,
                  data.percent * 100
                )}%)`;
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
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export { BreakdownViz };
