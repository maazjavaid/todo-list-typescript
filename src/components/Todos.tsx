import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Loader from "components/Loader";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "components/todos.css";
import TodoListContainer from "containers/TodoListContainer";
import { IAddTodoState } from "state/ducks/todos/types/utils";
import { PropsFromTodos } from "state/ducks/todos/types/redux";
const Todos: React.FC<PropsFromTodos> = ({
  loading,
  error,
  getTodosRequest,
  addTodoRequest,
}) => {
  useEffect(() => {
    getTodosRequest();
  }, []);
  const schema = yup.object({
    title: yup.string().required("Title is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddTodoState>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IAddTodoState) => {
    addTodoRequest({
      _id: null,
      title: data.title,
      completed: false,
    });
    reset();
  };
  return (
    <div className="task-container">
      <h1>Task Todo List</h1>

      <form className="task-input" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("title")} />
        <button type="submit">Add</button>
      </form>
      {errors.title && <p>{errors.title.message}</p>}
      {error && <div>{error}</div>}
      {loading ? <Loader /> : <TodoListContainer />}
    </div>
  );
};

export default Todos;
