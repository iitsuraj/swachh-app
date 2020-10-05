import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import { Iinspection } from 'app/models/reducers/inspection';

const initialState: Iinspection = {
  factory: [
    {
      name: 'Pollution Source 1',
      location: 'Ratan Shahar, Bagar, Jhunjhunu, Rajasthan',
      coordinates: [1, 2],
    },
    {
      name: 'Pollution Source 2',
      location: 'Ratan Shahar, Islampur, Jhunjhunu, Rajasthan',
      coordinates: [1, 2],
    },
    {
      name: 'Pollution Source 3',
      location: 'Pilani, Jhunjhunu, Rajasthan',
      coordinates: [1, 2],
    },
  ],
};

export const dashboardReducer = createReducer(initialState, {});
