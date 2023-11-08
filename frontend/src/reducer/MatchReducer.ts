import { Belief } from '@/pages/match/beliefs';
import { Experiences } from '@/pages/match/challenges';
import { Gender } from '@/pages/match/gender';
import { Language } from '@/pages/match/language';
import { Religion } from '@/pages/match/religion';

export type UpdateBeliefAction = {
  type: 'update-belief';
  payload: Belief;
};
export type UpdateGenderAction = {
  type: 'update-gender';
  payload: Gender;
};
export type UpdateLanguageAction = {
  type: 'update-language';
  payload: Language;
};
export type UpdateReligionAction = {
  type: 'update-religion';
  payload: Religion;
};

export type UpdateExperiencesAction = {
  type: 'update-experiences';
  payload: Experiences;
};

export type MatchState = {
  belief: Belief['belief'] | undefined;
  experiences: Experiences['experiences'] | undefined;
  gender: Gender['gender'] | undefined;
  religion: Religion['religion'] | undefined;
  language: Language['language'] | undefined;
};

export type MatchActions =
  | UpdateBeliefAction
  | UpdateExperiencesAction
  | UpdateLanguageAction
  | UpdateGenderAction
  | UpdateReligionAction;

export const initialMatchState: MatchState = {
  belief: undefined,
  experiences: undefined,
  religion: undefined,
  language: undefined,
  gender: undefined,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export function matchReducer(state = initialMatchState, action: MatchActions) {
  switch (action.type) {
    case 'update-gender':
      localStorage.setItem(
        'healHavenMatch',
        JSON.stringify({ ...state, gender: action.payload.gender })
      );
      return { ...state, gender: action.payload.gender };
    case 'update-belief':
      localStorage.setItem(
        'healHavenMatch',
        JSON.stringify({ ...state, belief: action.payload.belief })
      );
      return { ...state, belief: action.payload.belief };
    case 'update-language':
      localStorage.setItem(
        'healHavenMatch',
        JSON.stringify({ ...state, language: action.payload.language })
      );
      return {
        ...state,
        language: action.payload.language,
      };
    case 'update-religion':
      localStorage.setItem(
        'healHavenMatch',
        JSON.stringify({ ...state, religion: action.payload.religion })
      );
      return {
        ...state,
        religion: action.payload.religion,
      };
    case 'update-experiences':
      localStorage.setItem(
        'healHavenMatch',
        JSON.stringify({ ...state, experiences: action.payload.experiences })
      );
      return {
        ...state,
        experiences: action.payload.experiences,
      };
    default:
      return state;
  }
}
