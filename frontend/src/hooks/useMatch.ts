import { MatchContext, MatchContextValue } from '@/context/match-context';
import { useContext } from 'react';

// Custom hook to access the AuthContext
export const useMatches = (): MatchContextValue => {
  const matchContext = useContext(MatchContext);

  if (!matchContext) {
    throw new Error('useMatch must be used within an MatchProvider');
  }

  return matchContext;
};
