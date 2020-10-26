import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import { IDashboard } from 'app/models/reducers/dashboard';
import { IDashboardDataResponse } from 'app/models/actions/dashboard';
const initialState: IDashboard = {
  totalAssigned: 0,
  totalInspected: 0,
  totalCompleted: 0,
  loading: false,
};
export interface IDashboardResponseState {
  type: String;
  response: IResponse;
}
interface IResponse {
  totalAssigned: number;
  totalInspected: number;
  totalCompleted: number;
}

export const dashboardReducer = createReducer(initialState, {
  [types.DASHBOARD_ENABLE_LOADER](state: IDashboard) {
    return {
      ...state,
      loading: true,
    };
  },
  [types.DASHBOARD_DISABLE_LOADER](state: IDashboard) {
    return {
      ...state,
      loading: false,
    };
  },
  [types.DASHBOARD_DATA_REQUEST](state: IDashboard) {
    return {
      ...state,
      loading: true,
    };
  },
  [types.DASHBOARD_DATA_RESPONSE](
    state: IDashboard,
    action: IDashboardResponseState,
  ) {
    return {
      ...state,
      ...action.response,
    };
  },
});
