import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

export type AuthContextValue = {
  token: string | null;
  setToken: (value: string | null) => void;
};

// Create the context
export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, changeToken] = useState(localStorage.getItem('healHavenToken'));

  const setToken = useCallback((value: string | null) => {
    if (!value) {
      changeToken(null);
      localStorage.removeItem('healHavenToken');
      return;
    }
    changeToken(value);
    localStorage.setItem('healHavenToken', value);
  }, []);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token, setToken]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
