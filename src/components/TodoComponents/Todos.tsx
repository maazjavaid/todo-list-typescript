import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TodoListContainer from "containers/TodoContainers/TodoListContainer";
import Loader from "components/Common/Loader";
import "components/TodoComponents/todos.css";
import { IAddTodoState } from "state/ducks/todos/types/utils";
import { IPropsFromTodos } from "state/ducks/todos/types/redux";
import { TodoTitleschema } from "state/utils/data";
import AlertComponent from "../Common/AlertComponent";
import { useNavigate } from "react-router-dom";

const Todos: React.FC<IPropsFromTodos> = ({
  loading,
  error,
  alert,
  getTodosRequest,
  addTodoRequest,
}) => {
  useEffect(() => {
    getTodosRequest();
  }, []);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddTodoState>({
    resolver: yupResolver(TodoTitleschema),
  });

  const onSubmit = (data: IAddTodoState) => {
    addTodoRequest({
      _id: null,
      title: data.title,
      completed: false,
    });
    reset();
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="task-container">
      <h1>Task Todo List</h1>
      <button onClick={() => handleLogout()} className="logout-button">
        Logout
      </button>
      <form className="task-input" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("title")} />
        <button type="submit">Add</button>
      </form>
      {errors.title && <p>{errors.title.message}</p>}
      {error && <div>{error}</div>}
      {loading ? <Loader /> : <TodoListContainer />}
      <AlertComponent {...alert} />
    </div>
  );
};

export default Todos;
