import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodosState } from "state/ducks/todos/types/redux";
import { ITodo } from "state/ducks/todos/types/utils";
const initialState: ITodosState = {
  data: [],
  loading: false,
  error: null,
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
        data: action.payload,
        loading: false,
        error: null,
      };
    },
    getTodosFail: (state) => {
      return {
        ...state,
        loading: false,
        error: "Failed to fetch todos",
      };
    },
    addTodoRequest: (state, action: PayloadAction<ITodo>) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    addTodoSuccess: (state, action: PayloadAction<ITodo>) => {
      return {
        data: [...state.data, action.payload],
        loading: false,
        error: null,
      };
    },
    addTodoFail: (state) => {
      return {
        ...state,
        loading: false,
        error: "Todo not added",
      };
    },
    removeTodoRequest: (state, action: PayloadAction<ITodo>) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    removeTodoSuccess: (state, action: PayloadAction<ITodo>) => {
      return {
        data: state.data.filter((e) => e._id !== action.payload._id),
        loading: false,
        error: null,
      };
    },
    removeTodoFail: (state) => {
      return {
        ...state,
        loading: false,
        error: "Todo not removed",
      };
    },
    updateTodoRequest: (state, action: PayloadAction<ITodo>) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    updateTodoSuccess: (state, action: PayloadAction<ITodo>) => {
      return {
        data: state.data.map((e) => {
          if (e._id === action.payload._id) {
            return {
              ...e,
              title: action.payload.title,
              completed: action.payload.completed,
            };
          }
          return e;
        }),
        loading: false,
        error: null,
      };
    },
    updateTodoFail: (state) => {
      return {
        ...state,
        loading: false,
        error: "Todo not updated",
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
