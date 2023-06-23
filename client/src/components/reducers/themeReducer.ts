import { Reducer, PayloadAction } from '@reduxjs/toolkit';
import { GetAllThemesAction, GET_ALL_THEMES, ThemeType } from '../Types/themeType';

const themeReducer: Reducer<ThemeType[], GetAllThemesAction> = (
  state: ThemeType[] = [],
  action: GetAllThemesAction,
): ThemeType[] => {
  switch (action.type) {
    case GET_ALL_THEMES:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
