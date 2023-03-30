import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IPropsFromTodoList } from "state/ducks/todos/types/redux";
import {
  ITodo,
  IAddTodoState,
  IEditTodoState,
} from "state/ducks/todos/types/utils";
import { TodoTitleschema } from "state/utils/data";

const TodoList: React.FC<IPropsFromTodoList> = ({
  todos,
  removeTodoRequest,
  updateTodoRequest,
}) => {
  const [editInput, setEditInput] = useState<IEditTodoState>({
    _id: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddTodoState>({
    resolver: yupResolver(TodoTitleschema),
  });

  const onSubmit = (data: IAddTodoState) => {
    updateTodoRequest({ ...editInput, title: data.title });
    setEditInput({ _id: null });
    reset();
  };

  if (todos.length === 0) return <h2 className="No-tasks">No Tasks Added</h2>;

  return (
    <div className="task-list-wrapper">
      {todos.map((task: ITodo) => {
        if (task._id === editInput?._id)
          return (
            <>
              <form
                key={task._id}
                onSubmit={handleSubmit(onSubmit)}
                className="task-task"
              >
                <>
                  <div className="task-input">
                    <input
                      type="text"
                      defaultValue={task.title}
                      {...register("title")}
                    />
                  </div>
                  <div className="button-container">
                    <button type="submit">Save</button>
                    <button
                      onClick={() => {
                        setEditInput({ _id: null });
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              </form>
              {errors.title && <div>{errors.title.message}</div>}
            </>
          );

        return (
          <div key={task._id} className="task-task">
            <div className="task-complete-detail">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  updateTodoRequest({
                    ...task,
                    completed: !task.completed,
                  })
                }
              />
              <h3 className={task.completed ? "task-complete" : ""}>
                {task.title}
              </h3>
            </div>
            <div className="button-container">
              <button
                onClick={() => {
                  reset();
                  setEditInput({ _id: task._id });
                }}
              >
                Edit
              </button>
              <button onClick={() => removeTodoRequest(task._id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
