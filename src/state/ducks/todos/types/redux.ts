import {
  getTodosRequest,
  addTodoRequest,
  removeTodoRequest,
  updateTodoRequest,
} from "state/ducks/todos/todoSlice";
import { RootState } from "state";
import { ITodo, IAlert } from "state/ducks/todos/types/utils";
export interface ITodosState {
  data: ITodo[];
  loading: boolean;
  error: null | string;
  alert: IAlert;
}

export interface ITodosStateProps {
  loading: RootState["todos"]["loading"];
  error: RootState["todos"]["error"];
  alert: RootState["todos"]["alert"];
}

export interface ITodosDispatchProps {
  getTodosRequest: typeof getTodosRequest;
  addTodoRequest: typeof addTodoRequest;
}

export type IPropsFromTodos = ITodosStateProps & ITodosDispatchProps;

export interface ITodoListStateProps {
  todos: RootState["todos"]["data"];
}

export interface ITodoListDispatchProps {
  removeTodoRequest: typeof removeTodoRequest;
  updateTodoRequest: typeof updateTodoRequest;
}

export type IPropsFromTodoList = ITodoListStateProps & ITodoListDispatchProps;
