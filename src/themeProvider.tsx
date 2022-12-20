import {ThemeProvider} from '@shopify/restyle';
import {UITheme} from './uikit';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProviderApp: React.FC<ThemeProviderProps> = ({children}) => (
  <ThemeProvider theme={UITheme}>{children}</ThemeProvider>
);

export default ThemeProviderApp;
