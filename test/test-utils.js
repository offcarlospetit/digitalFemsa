import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import { UITheme } from '../src/uikit';
import { Provider } from 'react-redux';
import { setupStore } from '../src/store';


function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={UITheme}>
          {children}
        </ThemeProvider>
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { renderWithProviders as render };