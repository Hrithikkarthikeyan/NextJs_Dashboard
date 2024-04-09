'use client';

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from 'react';
import {NextUIProvider} from '@nextui-org/react'

interface ProviderProps {
  children: ReactNode;
}
const Provider: FC<ProviderProps> = ({ children }) => {
  return(
    <SessionProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </SessionProvider>
  );
}

export default Provider;