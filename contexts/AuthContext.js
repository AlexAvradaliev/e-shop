// contexts/AuthContext.js
'use client';

import { createContext, useContext } from 'react';
import { SessionProvider, useSession, signOut } from 'next-auth/react';

const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuthContext error');
  return context;
};

const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();

  const value = {
    user: session?.user || null,
    isAuthenticated: status === 'authenticated',
    loading: status === 'loading',
    logout: () => signOut({ callbackUrl: '/' }),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function AuthContextWrapper({ children }) {
  return (
    <SessionProvider>
      <AuthProvider>{children}</AuthProvider>
    </SessionProvider>
  );
}