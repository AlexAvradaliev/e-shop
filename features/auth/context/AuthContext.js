'use client';

import {
  createContext,
  useContext,
  useMemo,
} from 'react';

import {
  SessionProvider,
  useSession,
  signOut,
} from 'next-auth/react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  return (
    <SessionProvider>
      <AuthContent>
        {children}
      </AuthContent>
    </SessionProvider>
  );
}

function AuthContent({ children }) {
  const session = useSession();

  const logout = async () => {
    await signOut({
      callbackUrl: '/',
    });
  };

  const value = useMemo(() => {
    return {
      session,
      user: session?.data?.user || null,
      isAuthenticated: !!session?.data?.user,
      isLoading: session.status === 'loading',
      logout,
    };
  }, [session]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside AuthProvider'
    );
  }

  return context;
}