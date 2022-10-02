import React from 'react';
import ReactTooltip from 'react-tooltip';
import { useAppConfig } from '../ConfigContext';
import './styles.css';

function LocaleSelector() {
  const [config, dispatch] = useAppConfig();

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="prompt">
        <span className="marginRight">Select Date Range</span>
        <a data-tip data-for="localeInfo">
          &#9432;
        </a>
        <ReactTooltip id="localeInfo" type="info">
          <span>
            All numerals in the visualisations are represented in the selected
            locale
          </span>
        </ReactTooltip>
      </div>
      <select
        value={config.locale}
        onChange={(e) => dispatch({ type: 'locale', value: e.target.value })}
      >
        <option value="en-US">United States</option>
        <option value="sv-SE">Sweden</option>
        <option value="es-ES">Spain</option>
        <option value="en-IN">India</option>
      </select>
    </div>
  );
}

export default LocaleSelector;
