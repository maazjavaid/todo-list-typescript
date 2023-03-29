import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import TodoList from "components/TodoList";
import {
  removeTodoRequest,
  updateTodoRequest,
} from "state/ducks/todos/todoSlice";
import { RootState } from "state";

import {
  ITodoListStateProps,
  ITodoListDispatchProps,
} from "state/ducks/todos/types/redux";

const mapStateToProps = (state: RootState): ITodoListStateProps => {
  return {
    todos: state.todos.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ITodoListDispatchProps => {
  return bindActionCreators(
    {
      removeTodoRequest,
      updateTodoRequest,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
