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

export type QuestionTypes = ThemeType[];

export const GET_ALL_THEMES = 'GET_ALL_THEME';
export type GetAllThemesAction = {
  type: typeof GET_ALL_THEMES;
  payload: ThemeType[];
};

export const GET_ONE_QUIZ = 'GET_ONE_QUIZ';
export type GetOneQuizAction = {
  type: typeof GET_ONE_QUIZ;
  payload: QuestionType;
};

export type ActionProductTypes = GetAllThemesAction | GetOneQuizAction;
