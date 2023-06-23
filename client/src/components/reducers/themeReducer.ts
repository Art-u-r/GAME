import type { Reducer } from '@reduxjs/toolkit';
import type { ActionProductTypes, ThemeType } from '../Types';
import { GET_ALL_THEMES, GET_ONE_QUIZ } from '../Types';

const themeReducer: Reducer<ThemeType[], ActionProductTypes> = (
  state: ThemeType[] = [],
  action,
): ThemeType[] => {
  switch (action.type) {
    case GET_ALL_THEMES:
      return action.payload;

    case GET_ONE_QUIZ:
      return action.payload;

    default:
      return state;
  }
};

export default themeReducer;
