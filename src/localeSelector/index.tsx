import { useConfig } from '../configContext/index.tsx';

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
        <option value="en-US">English (US)</option>
        <option value="es-ES">Spanish (Spain)</option>
      </select>
    </div>
  );
}

export default LocaleSelector;
