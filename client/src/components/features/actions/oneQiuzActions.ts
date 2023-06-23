import type { ActionProductTypes, QuestionType } from '../../Types';
import { GET_ONE_QUIZ } from '../../Types';

const oneQiuzAction = (payload: QuestionType): ActionProductTypes => ({
  type: GET_ONE_QUIZ,
  payload,
});

export default oneQiuzAction;
