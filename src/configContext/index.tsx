import { createContext, useContext, useReducer } from 'react';

const ConfigContext = createContext(undefined);

function configReducer(currentConfig, action) {
  switch (action.type) {
    case 'locale':
      return {
        ...currentConfig,
        locale: action.value,
      };
    default:
      throw new Error(`Invalid type for configReducer: ${action.type}`);
  }
}

function ConfigProvider({ children }) {
  const [config, dispatch] = useReducer(configReducer, { locale: 'en-US' });
  return (
    <ConfigContext.Provider value={[config, dispatch]}>
      {children}
    </ConfigContext.Provider>
  );
}

function useConfig() {
  const config = useContext(ConfigContext);
  if (!config) {
    throw new Error("useConfig can't be used without ConfigContext");
  }

  return config;
}

export { ConfigProvider, useConfig };
