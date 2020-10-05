import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import { IDashboard } from 'app/models/reducers/dashboard';

const initialState: IDashboard = {
  totalAssigned: 100,
  totalDone: 30,
  totalRemaining: 70,
};

export const dashboardReducer = createReducer(initialState, {});
