import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import watchTodos from "state/ducks/todos/todoSaga";
import todoReducer from "state/ducks/todos/todoSlice";
import userReducer from "state/ducks/users/userSlice";
import watchUser from "./users/userSaga";
export const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
});

export const rootSaga = function* rootSaga() {
  yield all([watchUser(), watchTodos()]);
};
