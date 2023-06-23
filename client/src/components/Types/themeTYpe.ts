export type ThemeType = {
  id: number;
  title: string;
  Quizzes: QuestionType[];
};

export type QuestionType = {
  id: number;
  question: string;
  answer: string;
  point: number;
  result: 'null' | 'true' | 'false';
  theme_id: number;
};

export const GET_ALL_THEMES = 'GET_ALL_THEME';
export type GetAllThemesAction = {
  type: typeof GET_ALL_THEMES;
  payload: ThemeType[];
};

export type QuestionTypes = ThemeType[];
