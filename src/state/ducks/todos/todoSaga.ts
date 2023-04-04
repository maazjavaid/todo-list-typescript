import { AnyAction } from "@reduxjs/toolkit";
import { takeEvery, put, call, takeLatest } from "redux-saga/effects";
import {
  getTodosRequest,
  getTodosSuccess,
  getTodosFail,
  addTodoRequest,
  addTodoSuccess,
  addTodoFail,
  removeTodoRequest,
  removeTodoSuccess,
  removeTodoFail,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoFail,
} from "state/ducks/todos/todoSlice";
import { ITodo } from "state/ducks/todos/types/utils";
import { apiCallRequest } from "state/utils/apiCaller";

function* getTodoTasksSaga(action: AnyAction): Generator {
  try {
    const data: ITodo[] = (yield call(
      apiCallRequest,
      "/todos/",
      "GET"
    )) as ITodo[];
    yield put(getTodosSuccess(data));
  } catch (error: any) {
    yield put(getTodosFail());
  }
}

function* AddTodoSaga(action: AnyAction): Generator {
  try {
    const res: ITodo = (yield call(apiCallRequest, "/todos/", "POST", {
      title: action.payload.title,
      completed: action.payload.completed,
    })) as ITodo;
    yield put(addTodoSuccess(res));
  } catch (error) {
    yield put(addTodoFail());
  }
}

function* UpdateTodoSaga(action: AnyAction): Generator {
  try {
    yield call(apiCallRequest, "/todos/" + action.payload._id, "PUT", {
      title: action.payload.title,
      completed: action.payload.completed,
    });
    yield put(updateTodoSuccess(action.payload));
  } catch (error) {
    yield put(updateTodoFail());
  }
}

function* RemoveTodoSaga(action: AnyAction): Generator {
  try {
    yield call(apiCallRequest, "/todos/" + action.payload, "DELETE");
    yield put(removeTodoSuccess(action.payload));
  } catch (error) {
    yield put(removeTodoFail());
  }
}

function* watchTodos() {
  yield takeLatest(getTodosRequest, getTodoTasksSaga);
  yield takeEvery(addTodoRequest, AddTodoSaga);
  yield takeEvery(updateTodoRequest, UpdateTodoSaga);
  yield takeEvery(removeTodoRequest, RemoveTodoSaga);
}

export default watchTodos;
