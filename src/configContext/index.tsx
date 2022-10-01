import { DEFAULT_APP_CONFIG } from '../constants';
import React, { createContext, useContext, useReducer } from 'react';

type AppConfig = {
  locale: string;
};
type AppConfigAction = {
  [k in 'type' | 'value']: string;
};

const AppConfigContext = createContext(undefined);

function appConfigReducer(
  currentConfig: AppConfig,
  action: AppConfigAction
): AppConfig {
  switch (action.type) {
    case 'locale':
      return {
        ...currentConfig,
        locale: action.value,
      };
    default:
      throw new Error(`Invalid type for appConfigReducer: ${action.type}`);
  }
}

function AppConfigProvider({ children }): JSX.Element {
  const [config, dispatch] = useReducer(appConfigReducer, DEFAULT_APP_CONFIG);

  return (
    <AppConfigContext.Provider value={[config, dispatch]}>
      {children}
    </AppConfigContext.Provider>
  );
}

function useAppConfig(): [AppConfig, React.Dispatch<AppConfigAction>] {
  const config = useContext(AppConfigContext);
  if (!config) {
    throw new Error("useAppConfig can't be used without AppConfigContext");
  }

  return config;
}

export type { AppConfig };
export { AppConfigProvider, useAppConfig };
