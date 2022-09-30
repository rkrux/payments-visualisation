import { useState } from 'react';
import { DEFAULT_DATE_RANGE } from '../constants.ts';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

export default function DateRange({ dateRange, updateDateRange }) {
  const [value, onChange] = useState([dateRange.startDate, dateRange.endDate]);

  return (
    <div id="dateRange" className="paddedCenter">
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
        />
      </div>
    </div>
  );
}
