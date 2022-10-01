import React from 'react';
import { useConfig } from '../configContext/index';

function LocaleSelector() {
  const [config, dispatch] = useConfig();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <label className="prompt">Select locale:</label>
      <select
        value={config.locale}
        onChange={(e) => dispatch({ type: 'locale', value: e.target.value })}
      >
        <option value="en-US">United States</option>
        <option value="es-ES">Spain</option>
        <option value="sv-SE">Sweden</option>
        <option value="en-IN">India</option>
      </select>
    </div>
  );
}

export default LocaleSelector;
