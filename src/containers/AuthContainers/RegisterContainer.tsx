import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { registerRequest } from "state/ducks/users/userSlice";
import { RootState } from "state";
import {
  IRegisterDispatchProps,
  IRegisterStateProps,
} from "state/ducks/users/types/redux";
import Register from "components/AuthComponents/Register";

const mapStateToProps = (state: RootState): IRegisterStateProps => {
  return {
    loading: state.user.loading,
    error: state.user.error,
    alert: state.user.alert,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IRegisterDispatchProps => {
  return bindActionCreators(
    {
      registerRequest,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
