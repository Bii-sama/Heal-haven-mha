import { Dispatch, ReactNode, createContext, useMemo, useReducer } from 'react';

import {
  MatchActions,
  MatchState,
  initialMatchState,
  matchReducer,
} from '@/reducer/MatchReducer';

export type MatchContextValue = {
  match: MatchState;
  dispatch: Dispatch<MatchActions>;
};

export const MatchContext = createContext<MatchContextValue | undefined>(
  undefined
);

export function MatchProvider({ children }: { children: ReactNode }) {
  const [match, dispatch] = useReducer(matchReducer, initialMatchState);
  const contextValue = useMemo(
    () => ({
      match,
      dispatch,
    }),
    [match, dispatch]
  );
  return (
    <MatchContext.Provider value={contextValue}>
      {children}
    </MatchContext.Provider>
  );
}
