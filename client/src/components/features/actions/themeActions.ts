import type { GetAllThemesAction, ThemeType } from '../../Types';
import { GET_ALL_THEMES } from '../../Types';

export const pullThemesAction = (payload: ThemeType[]): GetAllThemesAction => ({
  type: GET_ALL_THEMES,
  payload,
});
