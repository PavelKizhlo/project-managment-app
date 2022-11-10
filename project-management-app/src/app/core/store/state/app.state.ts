import { StateModel } from './state.model';

export const initialState: StateModel = {
  users: [],
  boards: [],
  localization: 'ru',
  authData: null,
  token: null,
};
