import 'msw';
import 'msw/node';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';


jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('redux-persist', () => {
    const real = jest.requireActual('redux-persist');
    return {
        ...real,
        persistReducer: jest
            .fn()
            .mockImplementation((config, reducers) => reducers),
    };
});

jest.mock('redux-persist/lib/integration/react', () => ({
    PersistGate: props => props.children,
}));

jest.mock('@react-navigation/native-stack', () => {
    const navigator = jest.requireActual('@react-navigation/native-stack');
    return {
        ...navigator,
        useHeaderHeight: jest.fn(),
    };
});

jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: () => ({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }),
}));

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');