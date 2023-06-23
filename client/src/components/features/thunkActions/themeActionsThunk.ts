import apiService from '../../../API';
import type { QuestionType, ThemeType } from '../../Types';
import oneQiuzAction from '../actions/oneQiuzActions';
import { pullThemesAction } from '../actions/themeActions';
import type { AppThunk } from '../reduxHooks';

export const themeThunk = (): AppThunk => (dispatch) => {
  apiService<ThemeType[]>('/qwiz')
    .then((res) => dispatch(pullThemesAction(res.data)))
    .catch(console.log);
};

export const oneQuizThunk =
  (id: QuestionType['id']): AppThunk =>
  (dispatch) => {
    apiService<QuestionType>(`/qwiz/${id}`)
      .then((res) => dispatch(oneQiuzAction(res.data)))
      .catch(console.log);
  };
