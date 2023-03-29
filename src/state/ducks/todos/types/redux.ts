import { ITodo } from "state/ducks/todos/types/utils";
import {
  getTodosRequest,
  addTodoRequest,
  removeTodoRequest,
  updateTodoRequest,
} from "state/ducks/todos/todoSlice";
import { RootState } from "state";
export interface ITodosState {
  data: ITodo[];
  loading: boolean;
  error: null | string;
}

export interface ITodosStateProps {
  loading: RootState["todos"]["loading"];
  error: RootState["todos"]["error"];
}

export interface ITodosDispatchProps {
  getTodosRequest: typeof getTodosRequest;
  addTodoRequest: typeof addTodoRequest;
}

export type PropsFromTodos = ITodosStateProps & ITodosDispatchProps;

export interface ITodoListStateProps {
  todos: RootState["todos"]["data"];
}

export interface ITodoListDispatchProps {
  removeTodoRequest: typeof removeTodoRequest;
  updateTodoRequest: typeof updateTodoRequest;
}

export type PropsFromTodoList = ITodoListStateProps & ITodoListDispatchProps;
