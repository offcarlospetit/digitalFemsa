import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ThemeProviderApp from './themeProvider';
import {Home} from './home';

type Props = {};

const App: React.FC<Props> = ({}) => {
  return (
    <ThemeProviderApp>
      <Home />
    </ThemeProviderApp>
  );
};

export default App;
