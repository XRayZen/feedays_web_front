'use client';
import { createContext } from 'react';

export type UserInfo = {
  name: string;
  age: number;
};

export const UserContext = createContext<UserInfo>({ name: '', age: 0 });
