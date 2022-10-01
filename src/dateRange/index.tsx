import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { useConfig } from '../configContext/index';
import { DEFAULT_DATE_RANGE } from '../constants';

export default function DateRange({ dateRange, updateDateRange }) {
  const [value, onChange] = useState([dateRange.startDate, dateRange.endDate]);
  const [config] = useConfig();

  return (
    <div id="dateRange">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span className="prompt">Select date range:</span>
        <DateRangePicker
          value={value}
          onChange={(newDates) => {
            onChange(newDates);
            updateDateRange({ startDate: newDates[0], endDate: newDates[1] });
          }}
          minDate={DEFAULT_DATE_RANGE.startDate}
          maxDate={DEFAULT_DATE_RANGE.endDate}
          clearIcon={null}
          locale={config.locale}
        />
      </div>
    </div>
  );
}
