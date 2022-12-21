import React from 'react';
import ThemeProviderApp from './themeProvider';
import AppNavigator from './navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';

type Props = {};

const App: React.FC<Props> = ({}) => {
  return (
    <ThemeProviderApp>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </ThemeProviderApp>
  );
};

export default App;
