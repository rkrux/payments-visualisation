import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { useAppConfig } from '../configContext';
import { DEFAULT_DATE_RANGE } from '../constants';
import './styles.css';
import ReactTooltip from 'react-tooltip';

export default function DateRange({ dateRange, updateDateRange }) {
  const [value, onChange] = useState([dateRange.startDate, dateRange.endDate]);
  const [config] = useAppConfig();

  return (
    <div id="dateRange" style={{ textAlign: 'center' }}>
      <div className="prompt">
        <span className="marginRight">Select date range</span>
        <span data-tip data-for="dateRangeInfo">
          &#9432;
        </span>
        <ReactTooltip id="dateRangeInfo" type="info">
          <span>Data is available from January 2021 to May 2021</span>
        </ReactTooltip>
      </div>
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
  );
}
