import { createAction, props } from '@ngrx/store';
import { AuthDataModel } from '../../../shared/models/user.model';

export enum AuthActionsList {
  signIn = '[AUTH] Create token',
  signUp = '[AUTH] Create new account',
  logOut = '[AUTH] Logout',
  getDataFromLS = '[AUTH] Get data from LS',
}

export const signUp = createAction(AuthActionsList.signUp, props<{ newUserData: AuthDataModel }>());

export const signIn = createAction(
  AuthActionsList.signIn,
  props<{ userData: Omit<AuthDataModel, 'name'> }>(),
);

export const logOut = createAction(AuthActionsList.logOut);

export const getDataFromLS = createAction(AuthActionsList.getDataFromLS);
