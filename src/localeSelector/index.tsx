import React from 'react';
import { useAppConfig } from '../ConfigContext';
import './styles.css';

function LocaleSelector() {
  const [config, dispatch] = useAppConfig();

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="prompt">Select Locale</div>
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
