import React from 'react';
import ThemeProviderApp from './themeProvider';
import AppNavigator from './navigation';

type Props = {};

const App: React.FC<Props> = ({}) => {
  return (
    <ThemeProviderApp>
      <AppNavigator />
    </ThemeProviderApp>
  );
};

export default App;
