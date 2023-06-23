export type ThemeType = {
  id: number;
  title: string;
  questions: QuestionType[];
};

export type QuestionType = {
  id: number;
  question: string;
  answer: string;
  point: number;
  result: 'null' | 'true' | 'false';
  theme_id: number;
};

export const GET_ALL_THEME = 'GET_ALL_THEME';
export type GetAllThemeType = {
  type: typeof GET_ALL_THEME;
  payload: ThemeType;
};

export type QuestionTypes = ThemeType[];
