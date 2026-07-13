import React, { createContext, useContext, useState, useCallback } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (firstName: string, lastName: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('beacon_user');
    return stored ? JSON.parse(stored) : null;
  });

  const isAuthenticated = user !== null;

  const login = useCallback(async (email: string, _password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // For demo: accept any email/password combo
    const mockUser: User = {
      id: '1',
      email,
      firstName: email.split('@')[0],
      lastName: 'User',
    };
    
    setUser(mockUser);
    localStorage.setItem('beacon_user', JSON.stringify(mockUser));
    return true;
  }, []);

  const register = useCallback(async (firstName: string, lastName: string, email: string, _password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const mockUser: User = {
      id: '1',
      email,
      firstName,
      lastName,
    };
    
    setUser(mockUser);
    localStorage.setItem('beacon_user', JSON.stringify(mockUser));
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('beacon_user');
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
