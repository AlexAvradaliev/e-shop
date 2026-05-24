// contexts/AuthContext.js
'use client';

import { createContext, useContext } from 'react';
import { SessionProvider, useSession, signOut } from 'next-auth/react';

// 1. Създаваме самия контекст
const AuthContext = createContext();

// 2. Custom Hook, който вече използваш в Header.js
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext doit être utilisé dans un AuthContextWrapper');
  }
  return context;
};

// 3. Вътрешен провайдър, който чете данните от NextAuth
const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();

  // Форматираме данните така, че да съвпадат точно с това, което очаква твоят Header.js
  const value = {
    user: session?.user || null,
    isAuthenticated: status === 'authenticated',
    loading: status === 'loading',
    // Използваме вградената функция на NextAuth за изход
    logout: () => signOut({ callbackUrl: '/' }), 
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// 4. Главен Wrapper, който експортираме по подразбиране (използва се в layout.js)
export default function AuthContextWrapper({ children }) {
  return (
    <SessionProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </SessionProvider>
  );
}