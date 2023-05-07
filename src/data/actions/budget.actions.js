import {
  BUDGET_GET,
  BUDGETED_CATEGORIES_GET,
} from 'data/constans';

import API from 'data/fetch';

export const fetchBudget = (id) => async (dispatch) => {
  const promise = API.budget.fetchBudget(id);
  return {
    type: BUDGET_GET,
    promise,
  };
};

export const fetchBudgetCategories = (id) => dispatch => {
  const promise = API.budget.fetchBudgetCategories(id);
  return {
    type: BUDGETED_CATEGORIES_GET,
    promise,
  };
};
