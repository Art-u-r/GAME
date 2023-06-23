import { apiService } from '../../../../API';
import { ThemeType } from '../../Types/themeType';
import { pullThemesAction } from '../actions/themeActions';
import { AppThunk } from '../reduxHooks';

export const themeThunk = (): AppThunk => (dispatch) => {
  apiService<ThemeType[]>('/qwiz')
    .then((res) => dispatch(pullThemesAction(res.data)))
    .catch(console.log);
};
