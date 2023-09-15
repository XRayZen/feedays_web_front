'use client';
import React from 'react';

// ReactのContext APIを使用して、カウンターアプリケーションの状態を管理するためのContextを作成
const CounterContext = React.createContext<
  [number, React.Dispatch<React.SetStateAction<number>>] | undefined
>(undefined);

// Contextを使用するためのProviderを作成
export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = React.useState(0);
  return <CounterContext.Provider value={[count, setCount]}>{children}</CounterContext.Provider>;
}

// カウンターコンポーネントを作成
export function useCounter() {
  const context = React.useContext(CounterContext);
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}
