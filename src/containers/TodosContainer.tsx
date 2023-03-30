import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Todos from "components/Todos";
import { addTodoRequest, getTodosRequest } from "state/ducks/todos/todoSlice";
import { RootState } from "state";
import {
  ITodosStateProps,
  ITodosDispatchProps,
} from "state/ducks/todos/types/redux";

const mapStateToProps = (state: RootState): ITodosStateProps => {
  return {
    loading: state.todos.loading,
    error: state.todos.error,
    alert: state.todos.alert,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ITodosDispatchProps => {
  return bindActionCreators(
    {
      getTodosRequest,
      addTodoRequest,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
