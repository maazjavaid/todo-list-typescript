import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import AlertComponent from "components/Common/AlertComponent";
import Loader from "components/Common/Loader";
import "./login.css";
import { IPropsFromLogin } from "state/ducks/users/types/redux";
import { IUser } from "state/ducks/users/types/utils";
import { UserLoginSchema } from "state/utils/data";

const Login: React.FC<IPropsFromLogin> = ({
  loading,
  error,
  alert,
  isAuth,
  loginRequest,
}) => {
  const { register, handleSubmit, reset } = useForm<IUser>({
    resolver: yupResolver(UserLoginSchema),
  });
  const onSubmit = (data: IUser) => {
    loginRequest({
      _id: null,
      name: null,
      email: data.email,
      password: data.password,
      token: null,
    });

    reset();
  };
  if (loading) {
    return <Loader />;
  }
  if (localStorage.getItem("token")) {
    window.location.href = "/todos";
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Paper className="login-paper">
            <div className="login-avatar">
              <Avatar className="login-avatar-logo">
                <LockOutlined />
              </Avatar>
              <h2>Sign In</h2>
            </div>
            <TextField
              className="login-textfield"
              label="Email"
              {...register("email")}
              placeholder="Enter username"
              fullWidth
            />
            <TextField
              className="login-textfield"
              label="Password"
              {...register("password")}
              placeholder="Enter password"
              type="password"
              fullWidth
              required
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              className="login-button"
              fullWidth
            >
              Sign in
            </Button>

            <Typography>
              {" "}
              Do you have an account ?<Link href="/register">Sign Up</Link>
            </Typography>
          </Paper>
        </Grid>
      </form>
      <AlertComponent {...alert} />
    </div>
  );
};

export default Login;
