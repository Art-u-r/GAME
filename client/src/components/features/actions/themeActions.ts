import { GetAllThemesAction, GET_ALL_THEMES, ThemeType } from '../../Types/themeType';

export const pullThemesAction = (payload: ThemeType[]): GetAllThemesAction => ({
  type: GET_ALL_THEMES,
  payload,
});
