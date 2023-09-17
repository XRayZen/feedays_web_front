'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import { store as ReduxStore } from '@/redux/store';

const theme = {
  config: {
    initialColorMode: 'dark', // ダークモードをデフォルトに設定
    useSystemColorMode: false, // OSの設定を使わせない
  },
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={ReduxStore}>
      <CacheProvider>
        <ChakraProvider theme={extendTheme(theme)}>{children}</ChakraProvider>
      </CacheProvider>
    </ReduxProvider>
  );
}
