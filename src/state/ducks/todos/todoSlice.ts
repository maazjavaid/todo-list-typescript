import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodosState } from "state/ducks/todos/types/redux";
import { ITodo } from "state/ducks/todos/types/utils";

const initialState: ITodosState = {
  data: [],
  loading: false,
  error: null,
  alert: {
    isOpen: false,
    message: null,
    severity: "success",
  },
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodosRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    getTodosSuccess: (state, action: PayloadAction<ITodo[]>) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
        alert: {
          ...state.alert,
          isOpen: false,
        },
      };
    },
    getTodosFail: (state) => {
      return {
        ...state,
        loading: false,
        error: "Failed to fetch todos",
        alert: {
          ...state.alert,
          isOpen: false,
        },
      };
    },
    addTodoRequest: (state, action: PayloadAction<ITodo>) => {
      return {
        ...state,
        loading: true,
        error: null,
        alert: {
          ...state.alert,
          isOpen: false,
        },
      };
    },
    addTodoSuccess: (state, action: PayloadAction<ITodo>) => {
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: null,
        alert: {
          isOpen: true,
          message: "Todo added successfully",
          severity: "success",
        },
      };
    },
    addTodoFail: (state) => {
      return {
        ...state,
        loading: false,
        error: "Todo not added",
        alert: {
          isOpen: true,
          message: "Todo not added",
          severity: "error",
        },
      };
    },
    removeTodoRequest: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        loading: true,
        error: null,
        alert: {
          ...state.alert,
          isOpen: false,
        },
      };
    },
    removeTodoSuccess: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        data: state.data.filter((todo) => todo._id !== action.payload._id),
        loading: false,
        error: null,
        alert: {
          isOpen: true,
          message: "Todo removed successfully",
          severity: "warning",
        },
      };
    },
    removeTodoFail: (state) => {
      return {
        ...state,
        loading: false,
        error: "Todo not removed",
        alert: {
          isOpen: true,
          message: "Todo not removed",
          severity: "error",
        },
      };
    },
    updateTodoRequest: (state, action: PayloadAction<ITodo>) => {
      return {
        ...state,
        loading: true,
        error: null,
        alert: {
          ...state.alert,
          isOpen: false,
        },
      };
    },
    updateTodoSuccess: (state, action: PayloadAction<ITodo>) => {
      return {
        ...state,
        data: [
          action.payload,
          ...state.data.filter((todo) => todo._id !== action.payload._id),
        ],
        loading: false,
        error: null,
        alert: {
          isOpen: true,
          message: "Todo updated successfully",
          severity: "success",
        },
      };
    },
    updateTodoFail: (state) => {
      return {
        ...state,
        loading: false,
        error: "Todo not updated",
        alert: {
          isOpen: true,
          message: "Todo not updated",
          severity: "error",
        },
      };
    },
  },
});

export const {
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
} = todoSlice.actions;

export default todoSlice.reducer;
