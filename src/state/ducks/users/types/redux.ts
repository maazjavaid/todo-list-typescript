import { IAlert } from "state/ducks/todos/types/utils";
import { IUser } from "./utils";
import { RootState } from "state";
import { loginRequest, registerRequest } from "../userSlice";

export interface IUserState {
  data: IUser | null;
  loading: boolean;
  error: null | string;
  alert: IAlert;
}

export interface ILoginStateProps {
  loading: RootState["user"]["loading"];
  error: RootState["user"]["error"];
  alert: RootState["user"]["alert"];
}

export interface ILoginDispatchProps {
  loginRequest: typeof loginRequest;
}

export type IPropsFromLogin = ILoginStateProps & ILoginDispatchProps;

export interface IRegisterStateProps {
  loading: RootState["user"]["loading"];
  error: RootState["user"]["error"];
  alert: RootState["user"]["alert"];
}

export interface IRegisterDispatchProps {
  registerRequest: typeof registerRequest;
}

export type IPropsFromRegister = IRegisterStateProps & IRegisterDispatchProps;
