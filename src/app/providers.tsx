'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import { store as ReduxStore } from '@/redux/store';

// 1. Import the extendTheme function

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

export const theme = extendTheme({ colors });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ReduxProvider store={ReduxStore}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </ReduxProvider>
    </CacheProvider>
  );
}
