import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { loginRequest } from "state/ducks/users/userSlice";
import { RootState } from "state";
import Login from "components/AuthComponents/Login";
import {
  ILoginDispatchProps,
  ILoginStateProps,
} from "state/ducks/users/types/redux";

const mapStateToProps = (state: RootState): ILoginStateProps => {
  return {
    loading: state.user.loading,
    error: state.user.error,
    alert: state.user.alert,
    isAuth: state.user.isAuth,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ILoginDispatchProps => {
  return bindActionCreators(
    {
      loginRequest,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
