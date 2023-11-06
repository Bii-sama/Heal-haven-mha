import { AuthContext, AuthContextValue } from '@/context/auth-context';
import { useContext } from 'react';

// Custom hook to access the AuthContext
export const useAuth = (): AuthContextValue => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return authContext;
};
